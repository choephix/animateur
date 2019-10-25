import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'https://threejs.org/examples/jsm/controls/TransformControls.js'
import { context } from './main.js'

import THIS from './viewport.js'

const DEFAULT_RIG = 1 /// 0 1

const viewportElem = document.getElementById( "viewport" )
const canvasElem = document.getElementById( "webgl-canvas" )
const textureLoader = new THREE.TextureLoader()

export const studioRigConfigurations = [
  {
    name : "default",
    colors : {
      background : 0x224477,
      grid_a : 0x99CCFF,
      grid_b : 0x4466CC,
    } ,
    lights : {
      ambient : [
        { color : 0xffffff, intensity : 1.20 } 
      ] ,
      directional : [
        { color : 0xffffff, intensity : .75, position : [-1, 1, 0 ] } ,
        { color : 0xffffff, intensity : .95, position : [ 1, 1, 1 ] } ,
        { color : 0xffffff, intensity : .45, position : [ 0, 0,-1 ] } ,
      ] ,
    } ,
  } ,
  {
    name : "in-gamish",
    colors : {
      background : 0x3a7f41,
      grid_a : 0xFFFF41,
      grid_b : 0x5a9f61,
    } ,
    lights : {
      ambient : [
        { color : 0xffffff, intensity : 0.70 }
      ] ,
      directional : [
        { color : 0xffffff, intensity : .40, position : [-1, 0,-1 ] } ,
        { color : 0xffffff, intensity : .70, position : [ 1, 1, 1 ] } ,
      ] ,
    } ,
  } ,
]

class StudioRig extends THREE.Group
{
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )

  initialize( configuration ) {
    while( this.children.length > 0 )
      this.remove( this.children[ 0 ] )

    THIS.scene.background = new THREE.Color( configuration.colors.background )

    configuration.lights.ambient.forEach( ( c, i ) => {
      let light = new THREE.AmbientLight( c.color, c.intensity )
      light.name = "Light (ambient) " + i
      this.add( light )
    } )

    configuration.lights.directional.forEach( ( c, i ) => {
      let light = new THREE.DirectionalLight( c.color, c.intensity )
      light.position.set( c.position[0], c.position[1], c.position[2] ).setLength(20)
      light.lookAt( new THREE.Vector3( 0,0,0 ) )
      light.name = "Light (directional) " + i
      this.add( light )
    } )

    this.grid = new THREE.GridHelper( 20, 20, 
                    configuration.colors.grid_a, 
                    configuration.colors.grid_b )
    this.add( this.grid )

    this.envMap = textureLoader.load( "assets/metal-5.png" )
    this.envMap.mapping = THREE.SphericalReflectionMapping
    this.envMap.encoding = THREE.sRGBEncoding

    // this.envMap = textureLoader.load( "assets/shitroom.jpg" )
    // this.envMap.mapping = THREE.EquirectangularReflectionMapping;
    // this.envMap.magFilter = THREE.LinearFilter;
    // this.envMap.minFilter = THREE.LinearMipmapLinearFilter;
    // this.envMap.encoding = THREE.sRGBEncoding
  }
}

export default 
{
  clock : new THREE.Clock(),
  scene : new THREE.Scene(),
  transformer: null,
  
  rig : new StudioRig(),
  characterModel : new THREE.Group(),
  mixer : new THREE.AnimationMixer( null ),
  
  setCharacter( character )
  {
    this.characterModel = character.model
    this.scene.add( character.model )

    character.model.traverse( o => {
      if ( o.material ) {
        o.material.metalness = .25
        o.material.roughness = .15
        o.material.envMap = this.rig.envMap
        o.material.envMapIntensity = 1.5
      }
    } )

    if ( ! character.looper ) {
      character.looper = {
        clock : new THREE.Clock(),
        mixer : new THREE.AnimationMixer( character.model ),
        onFrame()
        {
          this.mixer.update( this.clock.getDelta() )
          requestAnimationFrame( () => this.onFrame() )
        }
      }
      character.looper.clock.start()
      character.looper.onFrame()
    }
    this.mixer = character.looper.mixer
  },
  animPlay( anim ) {
    this.mixer.stopAllAction()
    this.mixer.uncacheClip( anim )
    this.mixer.currentAction = this.mixer.clipAction( anim )
    this.mixer.currentAction.setLoop( THREE.LoopRepeat )
    this.mixer.currentAction.enabled = true
    this.mixer.currentAction.weight = 1.0
    this.mixer.currentAction.play()
    context.events.dispatch( "animation.play", this.mixer.currentAction )
  },
  animTogglePause() {
    this.mixer.currentAction.paused = ! this.mixer.currentAction.paused
  },
  setup()
  {
    this.clock.start()
    this.renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } )

    this.scene.add( this.rig )
    this.rig.initialize( studioRigConfigurations[ DEFAULT_RIG ] )

    this.rig.camera.position.z = 3
    this.rig.camera.position.y = 2
    this.rig.camera.lookAt( new THREE.Vector3() )

    this.orbit = new OrbitControls( this.rig.camera, canvasElem )
    this.orbit.target = new THREE.Vector3( 0, 1, 0 )
    this.orbit.update()
    this.orbit.mouseButtons.LEFT = 0
    this.orbit.mouseButtons.RIGHT = 2
    this.orbit.mouseButtons.MIDDLE = -1
    this.orbit.enableKeys = false

    this.transformer = new TransformControls( this.rig.camera, canvasElem )
    this.transformer.addEventListener( 'dragging-changed', event => this.orbit.enabled = ! event.value )
    this.transformer.setSize( 0.5 )
    this.transformer.setSpace( "local" )
    this.scene.add( this.transformer )

    /// /// /// /// ///

    context.events.subscribe( "change.selection", () => {
      
      if ( context.selection.last.hasOwnProperty( "duration" ) )
        this.animPlay( context.selection.last )
      else
      if ( context.selection.type == "prop" )
        this.mixer.currentAction.paused = true

      if ( context.selection.type == "prop" || context.selection.type == "node" )
        this.transformer.attach( context.selection.last )
      else
        this.transformer.detach()
    } )

    /// /// /// /// ///

    this.animate()
  },
  resize( W, H ) 
  {
    this.renderer.setSize( W, H )
    this.rig.camera.aspect = W / H;
    this.rig.camera.updateProjectionMatrix();
  },
  animate()
  {
    this.resize( viewportElem.clientWidth, viewportElem.clientHeight )
    this.renderer.render( this.scene, this.rig.camera )
    requestAnimationFrame( () => this.animate() )
  },
  clear() {
    this.transformer.detach()
    if ( this.characterModel !== undefined ) {
      this.scene.remove( this.characterModel )
      this.characterModel = null
    }  
  },
}