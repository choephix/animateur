import viewport, { studioRigConfigurations } from './viewport.js'
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
  characters : [],
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
  animani : animani,
}

function initialize() 
{
  $( "loading" ).hide()

  viewport.setup()
  sidebar.setup()
  materials.initialize()

  const loadFromServer = ( filename, token ) => {
    const url_base = "https://firebasestorage.googleapis.com/v0/b/herocom-dev.appspot.com/o/"
    const url = `${ url_base }glb%2F${ filename }?alt=media&token=${ token }`
    loadFromUrl( url ).then( gltf => {
      onSceneLoaded( gltf.scene.children[ 0 ], gltf.animations )
      context.data.model.scale.setScalar( .01 )
    } )
  }
  $( "button.save" ).click( e => exporter.save( context.data.model, context.data.anims, 
                                     { animationsUserData : context.animani.data },
                                     e.currentTarget.getAttribute("binary") == "true",
                                     e.currentTarget.getAttribute("local") == "true" ) )
  ///

  $.contextMenu( {
    selector: 'button.load-from-server', 
    trigger: 'left',
    items: [
            [ "fea0fd00-1962-4c49-b929-c6568819354c", "default.gltf" ],
            [ "adbf484c-e612-4f44-843f-28ef8557b06d", "hero-captain-alternative.glb" ],
            [ "8c32ce41-e058-4c8d-bb1f-d89c3e3e3cc3", "hero-captain.glb" ],
            [ "29909ceb-5116-4248-8433-4a7a8983474d", "hero-shield.glb" ],
            [ "9c7a2b30-a8a0-4cbe-9013-e9c61677edda", "hero-witcha.glb" ],
            [ "5f120fc7-a39c-4923-9a41-bae15fb81b81", "hero-ashi.glb" ],
            [ "e3c3be10-0f0c-42e4-8394-a4a4d9855d89", "hero-torcher.glb" ],
            [ "b1d9504a-839a-4ca3-be19-e8d4abb1e95f", "hero-gwendy.glb" ],
            [ "11972db4-98f0-4fd4-89c4-6d52d53021e6", "hero-gunner.glb" ],
           ].mapToObject( a => [ a[1] , { name : a[1], callback : () => loadFromServer( a[1], a[0] ) } ] )
  } )

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
  
  $.contextMenu( {
    selector: 'button.pick-rig',
    trigger: 'left',
    items: studioRigConfigurations.map( c => 
      { return { name : c.name , callback : () => context.viewport.rig.initialize( c ) } } )
  } )

  /// /// /// /// ///

  // context.events.subscribe( "change.data", () => console.log( "change.data" , context.data ) )
  // context.events.subscribe( "change.selection", () => console.log( "change.selection" , context.selection ) )
  
  onFrame()
}

function onFrame() {
  if ( context.data.dirty ) {
    context.events.dispatch( "change.data", context.data )
    context.data.dirty = false
  }
  if ( context.selection.dirty ) {
    context.events.dispatch( "change.selection", context.selection )
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

  // if ( context.data.model )
    // viewport.clear()

  viewport.setCharacter( model )
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

function addCharacter( model, animations )
{
  let character = { model : model , animations : animations }
  model.position.x = context.characters.length
  context.characters.push( character )
  context.data.dirty = true

  model.traverse( o => {
    if ( o.material && o.material.metalness !== undefined )
    {
      o.material.metalness = .0
      o.material.roughness = .6
    }
  } )

  return character
}

export function focusOnCharacter( character )
{
  console.log( context.characters )

  // viewport.clear()
  context.data.anims.length = 0
  context.data.props.length = 0

  context.viewport.rig.position.x = character.model.position.x
  context.viewport.orbit.target.x = character.model.position.x
  context.viewport.orbit.update()

  viewport.setCharacter( character )
  context.data.model = character.model
  context.data.anims.push( ...character.animations )
  refreshPropsList()

  context.animani.data = character.model.userData.animationsUserData || {}

  context.data.dirty = true
}

function onSceneLoaded( model, animations ) 
{
  console.log( model, animations )

  let character = addCharacter( model, animations )
  focusOnCharacter( character )
  
  context.data.props.forEach( prop => prop.visible = ! prop.userData.hidden )
  extractColors( character.model )
  playDefaultAnimation()
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
  colors.forEach( c => materials.pickr.setColor( c ) )
}

initialize()

window.context = context
window.util = util
window.dev = dev