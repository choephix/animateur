import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'https://threejs.org/examples/jsm/controls/TransformControls.js';
import { context } from './main.js';
import { TRACK_NAME_WEIGTH, TRACK_NAME_EVENTS } from './animani.js';

const viewportElem = document.getElementById( "viewport" )
const canvasElem = document.getElementById( "webgl-canvas" )

export default 
{
  clock : new THREE.Clock(),
  scene : new THREE.Scene(),
  camera : new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 ),
  transformer: null,
  clipEventPoint : new THREE.Object3D(),
  
  characterModel : new THREE.Group(),
  mixer : new THREE.AnimationMixer( null ),
  
  setModel( subject )
  {
    this.characterModel = subject
    this.scene.add( subject )
    this.mixer = new THREE.AnimationMixer( subject )
    // this.mixer = new THREE.AnimationMixer( this.scene )

    let ani = new THREE.Bone()
    ani.name = "animateur"
    ani[ TRACK_NAME_WEIGTH ] = 0.0
    ani[ TRACK_NAME_EVENTS ] = ''
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

    this.camera.position.z = 3
    this.camera.position.y = 2
    this.camera.lookAt( new THREE.Vector3() )

    this.scene.background = new THREE.Color( 0x224477 )
    
    this.scene.add( this.clipEventPoint )
    this.clipEventPoint.name = "animateurEvents"
    this.clipEventPoint.add( new THREE.Mesh( new THREE.SphereBufferGeometry( .05, 12, 8 ), new THREE.MeshStandardMaterial({color:0xEE8800}) ) )
    this.clipEventPoint.visible = false
    
    this.renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } )

    this.orbit = new OrbitControls( this.camera, this.renderer.domElement )
    this.orbit.target = new THREE.Vector3( 0, 1, 0 )
    this.orbit.update()
    this.orbit.mouseButtons.LEFT = 0
    this.orbit.mouseButtons.RIGHT = 2
    this.orbit.mouseButtons.MIDDLE = -1
    this.orbit.enableKeys = false

    let ligths = []
    
    ligths[ 0 ] = new THREE.AmbientLight( 0xffffff, 1.20 )
    ligths[ 0 ].name = "Light (ambient)"
    this.scene.add( ligths[ 0 ] )
    
    ligths[ 1 ] = new THREE.DirectionalLight( 0xffffff, 0.75 )
    ligths[ 1 ].position.set( -1, 1, 0 ).normalize()
    ligths[ 1 ].lookAt( new THREE.Vector3( 0,0,0 ) )
    ligths[ 1 ].name = "Light (directional}"
    this.scene.add( ligths[ 1 ] )
    
    ligths[ 2 ] = new THREE.DirectionalLight( 0xffffff, 0.95 )
    ligths[ 2 ].position.set( 1, 1, 1 ).normalize()
    ligths[ 2 ].lookAt( new THREE.Vector3( 0,0,0 ) )
    ligths[ 2 ].name = "Light (directional}"
    this.scene.add( ligths[ 2 ] )
    
    ligths[ 3 ] = new THREE.DirectionalLight( 0xFFFFFF, 0.45 )
    ligths[ 3 ].position.set( 0, 0, -1 ).normalize()
    ligths[ 3 ].lookAt( new THREE.Vector3( 0,0,0 ) )
    ligths[ 3 ].name = "Light (directional}"
    this.scene.add( ligths[ 3 ] )

    this.transformer = new TransformControls( this.camera, canvasElem )
    this.transformer.addEventListener( 'dragging-changed', event => this.orbit.enabled = ! event.value )
    this.transformer.setSize( 0.5 )
    this.transformer.setSpace( "local" )
    this.scene.add( this.transformer )
    
    this.grid = new THREE.GridHelper( 20, 20, 0x99CCFF, 0x4466CC )
    this.scene.add( this.grid )

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
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
  },
  animate()
  {
    this.resize( viewportElem.clientWidth, viewportElem.clientHeight )
    this.mixer.update( this.clock.getDelta() )
    // this.orbit.update()
    this.renderer.render( this.scene, this.camera )
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