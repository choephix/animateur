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

  $( "button.save" ).click( e => exporter.save( context.data.model, context.data.anims, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )
  $( "button.transform.position" ).click( e => viewport.transformer.setMode( "translate" ) )
  $( "button.transform.rotation" ).click( e => viewport.transformer.setMode( "rotate" ) )
  $( "button.transform.scale" ).click( e => viewport.transformer.setMode( "scale" ) )
  $( "button.transform.space" ).click( e => viewport.transformer.setSpace( 
                                            viewport.transformer.space === "world" ? "local" : "world" ) )

  $( "button.attach-to-bone" ).click( e => {
    if ( ! context.selection.prop ) return
    let bone_name = prompt( "Type bone name (sorry..)", "mixamorigRightHand" )
    let bone = context.viewport.scene.getChildByName( bone_name )
    let prop = context.viewport.scene.getObjectByProperty( "uuid", context.selection.prop.object.uuid )
    bone.add( prop )
  } )

  new DropField( document.getElementById('viewport') ).onAssetLoaded = onSceneLoaded
  new DropField( document.getElementById('subpanel-nodes') )
  new DropField( document.getElementById('subpanel-props') ).onAssetLoaded = onPropLoaded
  new DropField( document.getElementById('subpanel-anims') )
}

function refreshPropsList()
{
  function findPropsIn( o ) {
    let push = false 
    push |= ( ( o.type === "Object3D" || o.type === "Group" ) && o.children && o.children.length )
    push |= o.type === "Mesh"
    push &= o !== context.data.model
    if ( push )
      context.data.props.push( o )
    else 
    if ( o.children )
      o.children.forEach( child => findPropsIn( child ) )
  }

  context.data.props.length = 0
  findPropsIn( context.data.model )
}

function onPropLoaded( prop ) 
{
  prop.children[0].material = context.data.model.children[1].material.clone()

  context.data.props.push( prop )
  // let bone_name = prompt( "Type bone name (sorry..)", "mixamorigRightHand" )
  // let bone = context.viewport.scene.getChildByName( bone_name )
  // bone.add( prop )
  context.data.model.add( prop )

  sidebar.update( context.data.model, context.data.props, context.data.anims )
}

function onSceneLoaded( gltf ) 
{
  $( "loading" ).hide()

  console.log( gltf )

  let model_source = gltf.scene.children.shift()
  viewport.setModel( model_source )
  context.data.model = viewport.scene.getObjectByProperty( "uuid", model_source.uuid )
  
  gltf.scene.children.forEach( prop => context.data.model.add( prop ) )

  refreshPropsList()

  context.data.anims.length = []
  context.data.anims.push( ...gltf.animations )

  let idle_anim = context.data.anims.find( a => a.name === "idle" ) ||
                  context.data.anims.find( a => a.name.toLowerCase().indexOf( "idle" ) > -1 )
  if ( idle_anim )
    context.viewport.animPlay( idle_anim )

  sidebar.update( context.data.model, context.data.props, context.data.anims )
  return


  viewport.scene.remove(  )
  context.data.props.forEach( o => viewport.scene.remove( o ) )

  context.data.model = 
  context.data.props.push( ...gltf.scene.children )
  context.data.anims.push( ...gltf.animations )

  viewport.scene.add( context.data.model )

  sidebar.update( context.data.model, context.data.props, context.data.anims )

  // console.log( gltf, context, viewport.scene )
}

initialize()

loadFromUrl( "/gltf/captain.gltf" ).then( gltf => {
  onSceneLoaded( gltf )
  context.data.model.scale.setScalar( .01 )
 } )

window.context = context