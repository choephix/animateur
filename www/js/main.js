import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import viewport from './viewport.js'
import sidebar from './sidebar.js'
import exporter from './export.js'
import { DropField } from './utils.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

initialize()

function initialize() 
{
  $( "loading" ).hide()

  viewport.setup()

  $( "button.save" ).click( e => exporter.save( model, animations, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )

  new DropField( document.getElementById('viewport') ).onAssetLoaded = onAssetLoaded
  new DropField( document.getElementById('subpanel-nodes') )
  new DropField( document.getElementById('subpanel-props') )
  new DropField( document.getElementById('subpanel-animations') )
}

function onAssetLoaded( gltf ) 
{
  $( "loading" ).hide()

  let model, props, animations

  console.log( 555, gltf )
  
  model = gltf.scene.children.shift()
  props = gltf.scene.children.concat()
  animations = gltf.animations
  // console.log( gltf, model, props, animations )

  viewport.setup()
  viewport.add( model )
  sidebar.update( model, props, animations )

  console.log( viewport.scene )
}