import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import viewport from './viewport.js'
import sidebar from './sidebar.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

loader.load( 'gltf/default.gltf', onLoaded )

function onLoaded( gltf ) 
{
  $("loading").hide()
  
  let subject = gltf.scene.children[0]
  console.log( gltf, subject )

  viewport.setup( subject )
  sidebar.update( subject ) 
}