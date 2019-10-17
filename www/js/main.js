import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

let viewportElem = document.getElementById( "viewport" )
let canvasElem = document.getElementById( "webgl-canvas" )

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )
let subject
loader.load( 'gltf/default.gltf', function ( gltf ) {
  console.log( gltf )
  $("loading").hide()
  subject = gltf.scene.children[0]
  initialize( subject )
} );

let map_node = ( node, depth=0 ) => {
  return {
    id : node.uuid,
    text : node.name,
    'state' : {
      'opened' : depth < 3,
      'selected' : false
    },
    children : node.children
                    .filter( child => child.name !== node.name )
                    .map( child => map_node( child, ++depth ) )
  }
}
function initialize( subject ) 
{
  let jstree_data = {
    core : {
      data : [ map_node( subject ) ],
      "themes" : {
        icons : false,
        // "variant" : "large"
      }
    },
    // "checkbox" : {
    //   "keep_selected_style" : false
    // },
    // "plugins" : [ "wholerow", "checkbox" ]
  }
  console.log( jstree_data )
  $(function () { $('#jstree').jstree( jstree_data ) } )
  
  setupScene( subject )
}

function setupScene( subject ) 
{
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 80;
  camera.position.y = 40;
  
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
  
  // var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
  // var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
  // var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
  // scene.add( cube );
  // var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
  // scene.add( sphere );

  scene.add( subject );

  function animate() {
    renderer.setSize( 
      viewportElem.clientWidth, 
      viewportElem.clientHeight );
  
    controls.update();
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }

  animate()
}