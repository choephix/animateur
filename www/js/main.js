import viewport from './viewport.js'
import sidebar from './sidebar.js'
import exporter from './export.js'
import { DropField, loadFromUrl } from './utils.js'

export const context = 
{
  selection : {
    transformable : null,
    node : null,
    prop : null,
    anim : null,
  },
  data : {
    model : null,
    props : [],
    anims : []
  },
  viewport : viewport,
  sidebar : sidebar,
}

export const events = {

}

function initialize() 
{
  $( "loading" ).hide()

  viewport.setup()
  sidebar.setup()

  $( "button.save" ).click( e => exporter.save( model, animations, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )

  new DropField( document.getElementById('viewport') ).onAssetLoaded = onAssetLoaded
  new DropField( document.getElementById('subpanel-nodes') )
  new DropField( document.getElementById('subpanel-props') )
  new DropField( document.getElementById('subpanel-anims') )

  loadFromUrl( "/gltf/captain.gltf" ).then( gltf => onAssetLoaded( gltf ) )
}

function onAssetLoaded( gltf ) 
{
  $( "loading" ).hide()

  console.log( gltf )

  viewport.scene.remove( context.data.model )
  context.data.props.forEach( o => viewport.scene.remove( o ) )

  context.data.model = gltf.scene.children.shift()
  context.data.props.push( ...gltf.scene.children )
  context.data.anims.push( ...gltf.animations )

  viewport.scene.add( context.data.model )
  context.data.props.forEach( o => viewport.scene.add( o ) )

  sidebar.update( context.data.model, context.data.props, context.data.anims )

  // console.log( gltf, context, viewport.scene )
}

initialize()

window.context = context