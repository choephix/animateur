import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import viewport from './viewport.js'
import sidebar from './sidebar.js'
import exporter from './export.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

loader.load( 'gltf/ybot.glb', onLoaded ) //// default.gltf

function onLoaded( gltf ) 
{
  $( "loading" ).hide()

  console.log( gltf )
  
  let model = gltf.scene.children.shift()
  let props = gltf.scene.children.concat()
  let animations = gltf.animations
  // console.log( gltf, model, props, animations )

  // model.userData = { message : "Here I am!" }
  // model.children[0].userData = { message : "Here I am!" }
  // model.children[1].userData = { message : "Here I am!" }
  // model.children[2].userData = { message : "Here I am!" }
  // animations[ 0 ].userData = { message : "Here I am!" }

  viewport.setup( model )
  sidebar.update( model, props, animations )

  console.log( viewport.scene )

  $( "button.save" ).click( e => exporter.save( model, animations, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )
}