import viewport from './viewport.js'
import sidebar from './sidebar.js'
import exporter from './export.js'
import { DropField } from './utils.js'

export const context = 
{
  selection : {
    node : null
  },
  data : {
    model : null,
    props : [],
    anims : []
  }
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
}

function onAssetLoaded( gltf ) 
{
  $( "loading" ).hide()

  viewport.scene.remove( context.data.model )

  context.data.model = gltf.scene.children.shift()
  context.data.props.push( ...gltf.scene.children )
  context.data.anims.push( ...gltf.animations )

  viewport.scene.add( context.data.model )
  sidebar.update( context.data.model, context.data.props, context.data.anims )

  // console.log( gltf, context, viewport.scene )
}

initialize()