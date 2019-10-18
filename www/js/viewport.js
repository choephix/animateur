// import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.js"
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'https://threejs.org/examples/jsm/controls/TransformControls.js';

let viewportElem = document.getElementById( "viewport" )
let canvasElem = document.getElementById( "webgl-canvas" )

export default 
{
  transformer: null,
  scene : new THREE.Scene(),
  add : function ( subject )
  {
    // var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
    // var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
    // var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
    // scene.add( cube );
    // var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
    // scene.add( sphere );

    this.scene.add( subject )
  },
  setup : function()
  {
    let scene = this.scene
    let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 80;
    camera.position.y = 40;

    scene.background = new THREE.Color( 0x112233 )
    
    let renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } );

    let orbit = new OrbitControls( camera, renderer.domElement );
    orbit.update()
    orbit.mouseButtons.LEFT = 0
    orbit.mouseButtons.RIGHT = 2
    orbit.mouseButtons.MIDDLE = -1
    
    let light_directional = new THREE.DirectionalLight( 0xffffff, 0.85 )
    light_directional.position.set( 1, 1, 1 ).normalize()
    light_directional.lookAt( new THREE.Vector3( 0,0,0 ) )
    light_directional.name = "Light (directional}"
    scene.add( light_directional )
    
    let light_ambient = new THREE.AmbientLight( 0xffffff, 1.20 )
    light_ambient.name = "Light (ambient)"
    scene.add( light_ambient )

    this.transformer = new TransformControls( camera, renderer.domElement )
    this.transformer.addEventListener( 'dragging-changed', event => orbit.enabled = ! event.value )
    this.transformer.setSize( 0.5 );
    this.scene.add( this.transformer )

    /// /// /// /// ///

    function resize( W, H ) {
      renderer.setSize( W, H )
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    }

    function animate() {
      resize( viewportElem.clientWidth, viewportElem.clientHeight )
    
      orbit.update();
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }

    animate()
  },
}