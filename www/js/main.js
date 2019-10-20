import viewport from './viewport.js'
import sidebar from './sidebar.js'
import materials from './materials.js'
import exporter from './export.js'
import { DropField, fileResolvers, loadFromUrl } from './load.js'

import util from './util.js'

export const context = 
{
  selection : {
    transformable : null,
    last : null,
    node : null,
    prop : null,
    anim : null,
    dirty : false,
  },
  data : {
    model : null,
    props : [],
    anims : [],
    dirty : false,
  },
  viewport : viewport,
  sidebar : sidebar,
  materials : materials,
  events : {
    functions : { },
    subscribe( key, callback ) {
      if ( !this.functions[key] )
        this.functions[key] = []
      this.functions[key].push( callback )
    },
    dispatch( key, data = null ) {
      if ( this.functions[key] )
        for ( let callback of this.functions[key] )
          callback( data )
    }
  },
  bonesList : $( "#bones-list" ).ready( () => {
    $( "#bones-list" ).hide()
    context.events.subscribe( "change.data", () => {
      let root_bone = util.getBone( "Hips" )
      let dom = $( "#bones-list .contents" )
      let incl = []
      dom.empty()
      root_bone.traverse( bone => {
        if ( bone.type !== "Bone" ) return
        if ( incl.indexOf( bone.name ) > -1 ) return
        incl.push( bone.name )
        let button = $('<button/>', {
          text: bone.name.replace("mixamorig",'').replace( /([A-Z])/g, ' $1' ),
          click: () => {
            if ( ! context.selection.prop ) return
            bone.add( context.selection.prop )
          }
        } )
        dom.append( button )
      } )
    } )
  } )
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
  ///
  $( "button.attach-to-bone" ).click( () => $( "#bones-list" ).toggle() )
  $( "button.animation.make-pose-first" ).click( () => {
    onAnimationsLoaded( util.makeSingleFrameAnimationFromFirstFrame( context.selection.anim ) )
  } )
  $( "button.animation.make-pose-last" ).click( () => {
    onAnimationsLoaded( util.makeSingleFrameAnimationFromLastFrame( context.selection.anim ) )
  } )

  new DropField( document.getElementById('viewport'), false ).resolver( fileResolvers.scene ).loaded( onSceneLoaded )
  new DropField( document.getElementById('subpanel-nodes') ).resolver( fileResolvers.model ).loaded( onCharacterLoaded )
  new DropField( document.getElementById('subpanel-props') ).resolver( fileResolvers.props ).loaded( onPropLoaded )
  new DropField( document.getElementById('subpanel-anims') ).resolver( fileResolvers.anims ).loaded( onAnimationsLoaded )

  /// /// /// /// ///

  // context.events.subscribe( "change.data", () => console.log( "change.data" , context.data ) )
  // context.events.subscribe( "change.selection", () => console.log( "change.selection" , context.selection ) )
  
  onFrame()
}

function onFrame() {
  if ( context.data.dirty ) {
    context.events.dispatch( "change.data" )
    context.data.dirty = false
  }
  if ( context.selection.dirty ) {
    context.events.dispatch( "change.selection" )
    context.selection.dirty = false
  }
  requestAnimationFrame( () => onFrame() )
}

function refreshPropsList()
{
  function findPropsIn( o ) {
    let push = false 
    let hasChildren = o.children && o.children.filter(c=>c.type!=="Bone").length
    push |= ( ( o.type === "Object3D" || o.type === "Group" ) && hasChildren )
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
  context.data.dirty = true
}

function onPropLoaded( ...props ) 
{
  console.log( props )

  props.forEach( prop => {
    context.data.props.push( prop )
    context.data.model.add( prop )
  } )

  context.data.dirty = true
}

function onCharacterLoaded( model )
{
  let scale = context.data.model.scale.clone()
  let props = context.data.props.concat()
  let propToBone = {}
  for ( let prop of props )
    propToBone[prop.uuid] = util.clipBoneName( prop.parent.name )
  context.data.props.length = 0

  if ( context.data.model )
    viewport.clear()

  viewport.setModel( model )
  context.data.model = model
  context.data.model.scale.copy( scale )
  
  extractColors( model )
  playDefaultAnimation()

  props.forEach( prop => {
    let bone = util.getBone( propToBone[ prop.uuid ] )
    if ( bone ) bone.add( prop )
    else console.warn( `Failed to reattach ${prop.name} to ${propToBone[prop.uuid]}` )
  } )
  refreshPropsList()

  context.data.dirty = true
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
  extractColors( model )
  playDefaultAnimation()

  context.data.dirty = true
}

function playDefaultAnimation() {
  let idle_anim = context.data.anims.find( a => a.name === "idle" ) ||
                  context.data.anims.find( a => a.name.toLowerCase().indexOf( "idle" ) > -1 )
  if ( idle_anim )
    context.viewport.animPlay( idle_anim )
}

function extractColors( model ) {
  let colors = []
  model.traverse( o => {
    if ( ! o.material ) return
    if ( ! o.material.color ) return
    let color = "#"+o.material.color.getHexString()
    if ( colors.indexOf( color ) > -1 ) return
    colors.push( color )
  } )
  colors.forEach( c => materials.pickr.setColor( c ) )
}

initialize()

// loadFromUrl( "/gltf/captain.gltf" ).then( gltf => {
//   onSceneLoaded( gltf )
//   context.data.model.scale.setScalar( .01 )
//  } )

window.context = context
window.util = util