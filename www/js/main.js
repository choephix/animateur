import viewport from './viewport.js'
import sidebar from './sidebar.js'
import materials from './materials.js'
import animani from './animani.js'
import exporter from './export.js'
import { DropField, fileResolvers, loadFromUrl } from './load.js'

import util from './util.js'
import dev from './dev.js'

export const context = 
{
  selection : {
    all : [],
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
  bonesList : {
    subjects : [],
    keepWorldMatrix : false, 
    dom : $( "#bones-list" ).ready( () => {
      $( "#bones-list" ).hide()
      context.events.subscribe( "change.data", () => {
        const _this = context.bonesList
        const dom = $( "#bones-list .contents" )
        dom.empty()
        dom.append( $('<button/>', { text: "❌", click: () => _this.close() } ) )
        
        const btn_global = $('<button/>', { text: "GLOBAL", click: () => {
          _this.keepWorldMatrix = ! _this.keepWorldMatrix
          btn_global.toggleClass( "off", ! _this.keepWorldMatrix )
        } } ) 
        btn_global.toggleClass( "off", ! _this.keepWorldMatrix )
        dom.append( btn_global )
  
        const root_bone = util.getBone( "Hips" )
        if ( ! root_bone ) return

        const addButton = bone => {
          dom.append( $('<button/>', {
            text: bone.name.replace("mixamorig",'').replace( /([A-Z])/g, ' $1' ),
            click: () => _this.addCurrentSubjectsTo( bone ),
          } ) )
        }

        dom.append(`<h3>HOLSTERS</h3>`)
        root_bone.traverse( child => { 
          if ( child.userData.isHolster )
            addButton( child )
        } )
        
        dom.append(`<h3>BONES</h3>`)
        let alreadyAdded = []
        root_bone.traverse( child => {
          if ( child.type !== "Bone" ) return
          if ( alreadyAdded.indexOf( child.name ) > -1 ) return
          alreadyAdded.push( child.name )
          addButton( child )
        } )
      } )
    } ),
    addCurrentSubjectsTo( parentToBe ) {
      const add = subject =>
        this.keepWorldMatrix ? parentToBe.attach( subject ) : parentToBe.add( subject )
      this.subjects.forEach( subject => add( subject ) )
      this.close()
      context.data.dirty = true
    },
    openFor( ...subjects ) {
      this.subjects.length = 0
      this.subjects.push( ...subjects )
      $( this.dom ).show()
      return this
    },
    close() {
      this.subjects.length = 0
      $( this.dom ).hide()
      return this
    }
  },
  animationBar : animani.animationBar
}

function initialize() 
{
  $( "loading" ).hide()

  viewport.setup()
  sidebar.setup()
  materials.initialize()

  $( "button.save" ).click( e => exporter.save( context.data.model, context.data.anims, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )
  $( "button.transform.position" ).click( e => viewport.transformer.setMode( "translate" ) )
  $( "button.transform.rotation" ).click( e => viewport.transformer.setMode( "rotate" ) )
  $( "button.transform.scale" ).click( e => viewport.transformer.setMode( "scale" ) )
  $( "button.transform.space" ).click( e => viewport.transformer.setSpace( 
                                            viewport.transformer.space === "world" ? "local" : "world" ) )
  ///

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
    push = push || ( ( o.type === "Object3D" || o.type === "Group" ) && hasChildren )
    push = push || o.type === "Mesh"
    push = push && ! o.userData.isHolster
    push = push && o !== context.data.model

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

  context.selection.all.length = []
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

  context.data.props.forEach( prop => prop.visible = ! prop.userData.hidden )

  context.data.dirty = true
}

function playDefaultAnimation() {
  let idle_anim = context.data.anims.find( a => a.name === "idle" ) ||
                  context.data.anims.find( a => a.name.toLowerCase().indexOf( "idle" ) > -1 )
  if ( idle_anim )
    context.viewport.animPlay( idle_anim )
}

function extractColors( model ) {
  let colors = util.findAll( model, o => o.material && o.material.color )
                .map( o => o.material.color.getHexString() )
                .toSet()
  console.log( colors )
  colors.forEach( c => materials.pickr.setColor( c ) )
}

initialize()

// loadFromUrl( "/gltf/captain.gltf" ).then( gltf => {
//   onSceneLoaded( gltf )
//   context.data.model.scale.setScalar( .01 )
//  } )

window.context = context
window.util = util
window.dev = dev