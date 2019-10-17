import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import viewport from './viewport.js'
import sidebar from './sidebar.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

loader.load( 'gltf/default.gltf', onLoaded )

function onLoaded( gltf ) 
{
  $("loading").hide()
  
  let model = gltf.scene.children.shift()
  let props = gltf.scene.children.concat()
  let animations = gltf.animations
  // console.log( gltf, model, props, animations )

  viewport.setup( model )
  sidebar.update( model, props, animations ) 
}