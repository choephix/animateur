import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'https://threejs.org/examples/jsm/controls/TransformControls.js';

let viewportElem = document.getElementById( "viewport" )
let canvasElem = document.getElementById( "webgl-canvas" )

export default 
{
  scene : new THREE.Scene(),
  clock : new THREE.Clock(),
  mixer : new THREE.AnimationMixer( null ),
  characterModel : null,
  transformer: null,
  setModel( subject )
  {
    this.characterModel = subject
    this.scene.add( subject )
    this.mixer = new THREE.AnimationMixer( subject )
  },
  animPlay( anim ) {
    this.mixer.stopAllAction()
    this.mixer.currentAction = this.mixer.clipAction( anim )
    this.mixer.currentAction.setLoop( THREE.LoopRepeat )
    this.mixer.currentAction.enabled = true
    this.mixer.currentAction.weight = 1.0
    this.mixer.currentAction.play()
  },
  animTPose() {
    this.mixer.stopAllAction()
    if ( this.mixer.currentAction ) {
      this.mixer.currentAction.enabled = false
      this.mixer.currentAction.weight = 0.0
    }
    this.mixer.currentAction = undefined
  },
  setup()
  {
    this.clock.start()

    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )
    this.camera.position.z = 3
    this.camera.position.y = 2
    this.camera.lookAt( new THREE.Vector3() )

    this.scene.background = new THREE.Color( 0x224477 )
    
    this.renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } )

    this.orbit = new OrbitControls( this.camera, this.renderer.domElement )
    this.orbit.target = new THREE.Vector3( 0, 1, 0 )
    this.orbit.update()
    this.orbit.mouseButtons.LEFT = 0
    this.orbit.mouseButtons.RIGHT = 2
    this.orbit.mouseButtons.MIDDLE = -1

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
    
    ligths[ 3 ] = new THREE.DirectionalLight( 0x994411, 0.45 )
    ligths[ 3 ].position.set( 0, 0, -1 ).normalize()
    ligths[ 3 ].lookAt( new THREE.Vector3( 0,0,0 ) )
    ligths[ 3 ].name = "Light (directional}"
    this.scene.add( ligths[ 3 ] )

    this.transformer = new TransformControls( this.camera, this.renderer.domElement )
    this.transformer.addEventListener( 'dragging-changed', event => this.orbit.enabled = ! event.value )
    this.transformer.setSize( 0.5 )
    this.transformer.setSpace( "local" )
    this.scene.add( this.transformer )

    
    this.grid = new THREE.GridHelper( 20, 20, 0xffff00, 0x4466CC )
    this.scene.add( this.grid )

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
    this.orbit.update()
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