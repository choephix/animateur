import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js'

let viewportElem = document.getElementById( "viewport" )
let canvasElem = document.getElementById( "webgl-canvas" )

export default 
{
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
    var scene = this.scene
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 80;
    camera.position.y = 40;

    scene.background = new THREE.Color( 0x112233 )
    
    var renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } );

    // var controls = new THREE.OrbitControls( camera, renderer.domElement );
    var controls = new OrbitControls( camera, renderer.domElement );
    controls.update()
    controls.mouseButtons.LEFT = 0
    controls.mouseButtons.RIGHT = 2
    controls.mouseButtons.MIDDLE = 1
    
    var light_directional = new THREE.DirectionalLight( 0xffffff, 0.85 )
    light_directional.position.set( 1, 1, 1 ).normalize()
    light_directional.name = "Light (directional}"
    scene.add( light_directional )
    
    let light_ambient = new THREE.AmbientLight( 0xffffff, 1.20 )
    light_ambient.name = "Light (ambient)"
    scene.add( light_ambient )

    function resize( W, H ) {
      renderer.setSize( W, H )
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    }

    function animate() {
      resize( viewportElem.clientWidth, viewportElem.clientHeight )
    
      controls.update();
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }

    animate()
  },
}