import viewport from './viewport.js'
import sidebar from './sidebar.js'
import materials from './materials.js'
import exporter from './export.js'
import { DropField, fileResolvers, loadFromUrl } from './utils.js'

export const context = 
{
  selection : {
    transformable : null,
    last : null,
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
    if ( bone ) bone.add( context.selection.prop )
  } )
  $( "button.set-color-1" ).click( e => {
    let material = context.data.model.children[ 1 ].material.clone() 
    context.selection.prop.traverse( o => { if ( o.material ) o.material = material } )
  } )
  $( "button.set-color-2" ).click( e => {
    let material = context.data.model.children[ 2 ].material.clone() 
    context.selection.prop.traverse( o => { if ( o.material ) o.material = material } )
  } )

  new DropField( document.getElementById('viewport'), false ).resolver( fileResolvers.scene ).loaded( onSceneLoaded )
  new DropField( document.getElementById('subpanel-nodes') )
  new DropField( document.getElementById('subpanel-props') ).resolver( fileResolvers.props ).loaded( onPropLoaded )
  new DropField( document.getElementById('subpanel-anims') ).resolver( fileResolvers.anims ).loaded( onAnimationsLoaded )
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

function onAnimationsLoaded( ...animations )
{
  console.log( animations )

  if ( animations.length < 1 )
    return

  context.data.anims.push( ...animations )
  context.viewport.animPlay( animations[ 0 ] )
  sidebar.update()
}

function onPropLoaded( ...props ) 
{
  console.log( props )

  // let bone_name = prompt( "Type bone name (sorry..)", "mixamorigRightHand" )
  // let bone = context.viewport.scene.getChildByName( bone_name )
  // bone.add( prop )
  props.forEach( prop => {
    context.data.props.push( prop )
    context.data.model.add( prop )
  } )

  sidebar.update()
}

function onSceneLoaded( model, animations ) 
{
  console.log( model, animations )

  if ( context.data.model )
  {
    viewport.clear()
    context.data.anims.length = 0
    context.data.props.length = 0
  }

  viewport.setModel( model )
  context.data.model = model
  context.data.anims.push( ...animations )
  refreshPropsList()
  
  let idle_anim = context.data.anims.find( a => a.name === "idle" ) ||
                  context.data.anims.find( a => a.name.toLowerCase().indexOf( "idle" ) > -1 )
  if ( idle_anim )
    context.viewport.animPlay( idle_anim )

  let colors = []
  model.traverse( o => {
    if ( ! o.material ) return
    let color = "#"+o.material.color.getHexString()
    if ( colors.indexOf( color ) > -1 ) return
    colors.push( color )
  } )
  colors.forEach( c => {
    materials.pickr_a.addSwatch( c )
    materials.pickr_b.addSwatch( c )
  } )
  materials.pickr_a.setColor( model.children[1].material.color.getHexString() )
  materials.pickr_b.setColor( model.children[2].material.color.getHexString() )

  sidebar.update()
}

initialize()

// loadFromUrl( "/gltf/captain.gltf" ).then( gltf => {
//   onSceneLoaded( gltf )
//   context.data.model.scale.setScalar( .01 )
//  } )

window.context = context

console.log( materials )