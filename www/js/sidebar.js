import { context } from "./main.js"
import util from "./util.js"
import dev from "./dev.js"

function map_node( node, depth=0 ) {
  return {
    id : node.uuid,
    text : `<input type="text" value="${ node.name || node.uuid }" disabled/>`,
    li_attr : { "hidden": node.visible ? undefined : "hidden" },
    type : node.object ? node.object.type : "default",
    state : { opened : depth < 3, selected : false },
    children : node.children
              .filter( child => child.uuid !== node.uuid )
              .map( child => map_node( child, ++depth ) )
  }
}
function map_prop( prop, depth=0 ) {
  return {
    id : prop.uuid,
    text : `<input type="text" value="${ prop.name || prop.uuid }" disabled/>`,
    li_attr : { "hidden": prop.visible ? undefined : "hidden" },
    children : prop.children
              .filter( child => child.uuid !== prop.uuid )
              .map( child => map_node( child, ++depth ) )
  }
}
function map_anim( anim ) {
  return {
    id : anim.uuid,
    text : `<input type="text" value="${ anim.name || anim.uuid }" disabled/>`,
  }
}

export default
{
  trees: { nodes : null, props : null, anims : null },
  setup: function ()
  {
    let settings = { core: { data: [], multiple: true } }
    settings.core.themes = { icons : false, responsive: true, ellipsis: true, }
    settings.core.check_callback = true
    settings.core.dblclick_toggle = false
    // settings.plugins = [ "dnd" ]
    
    /// JSTREE EVENTS

    this.trees.nodes = $('#subpanel-nodes tree').jstree( settings ).jstree( true )
    this.trees.props = $('#subpanel-props tree').jstree( settings ).jstree( true )
    this.trees.anims = $('#subpanel-anims tree').jstree( settings ).jstree( true )
    
    this.trees.nodes.element.on( "select_node.jstree", (e,d) => this.onSelectNode( d ) )
    this.trees.props.element.on( "select_node.jstree", (e,d) => this.onSelectProp( d ) )
    this.trees.anims.element.on( "select_node.jstree", (e,d) => this.onSelectAnim( d ) )
    $('tree').on( "select_node.jstree", (e,d) => console.log( context.selection.last ) )

    const ondblclick = (e) => {
      const dom = $(e.target).find("input")
      $(dom).attr( "disabled", false )
      $(dom).focus()
      $(dom).select()

      const apply = () => {
        console.log( "New name: ", $(dom).val() )
        const uuid = $(dom).closest("li")[0].id
        util.getByUuid( uuid ).name = $(dom).val()
        context.data.dirty = true
        $(dom).off( "blur" )
        $(dom).unbind( "keydown" )
      }
      $(dom).on( "blur", apply )
      $(dom).bind( "keydown", "return", apply )
    }
    this.trees.nodes.element.on("dblclick.jstree", ondblclick )
    this.trees.props.element.on("dblclick.jstree", ondblclick )
    this.trees.anims.element.on("dblclick.jstree", ondblclick )
    
    /// KEYBOARD EVENTS

    $('#subpanel-nodes tree').bind( "keydown", "del", e => {
      let uuids = this.trees.nodes.get_selected(false)
      if ( ! confirm( `You are about to delete the following nodes:\n${ uuids.join("\n") }` ) )
        return
      uuids.map( uuid => util.getByUuid( uuid ) ).forEach( o => o.parent.remove( o ) )
      context.viewport.transformer.detach()
      context.data.dirty = true
    } )

    $('#subpanel-props tree').bind( "keydown", "del", e => {
      this.trees.props.get_selected(false)
          .forEach( uuid => util.deleteProp( util.getByUuid( uuid ) ) )
      context.viewport.transformer.detach()
      context.data.dirty = true
    } )
    
    $('#subpanel-anims tree').bind( "keydown", "del", e => {
      let uuids = this.trees.anims.get_selected(false)
      if ( ! confirm( `You are about to delete the following animations:\n${ uuids.join("\n") }` ) )
        return
      for ( let i = context.data.anims.length - 1 ; i >= 0 ; i-- )
        if ( uuids.indexOf( context.data.anims[ i ].uuid ) > -1 )
          context.data.anims.splice( i, 1 )
      context.data.dirty = true
    } )

    ///

    context.events.subscribe( "change.data", () => this.update() )
    
    function onFrame() {
      inspector.update()
      requestAnimationFrame( () => onFrame() )
    }

    onFrame()
  },
  onSelectNode( data ) 
  {
    this.trees.props.deselect_all()
    this.trees.anims.deselect_all()
    let node = util.getByUuid( data.node.id )
    context.selection.all = data.selected
    context.selection.transformable = 
    context.selection.last =
    context.selection.node = node
    context.selection.dirty = true
    context.viewport.transformer.attach( node )
    context.viewport.mixer.stopAllAction()
  },
  onSelectProp( data ) 
  {
    this.trees.nodes.deselect_all()
    this.trees.anims.deselect_all()
    let prop = util.getByUuid( data.node.id )
    context.selection.all = data.selected
    context.selection.transformable = 
    context.selection.last = 
    context.selection.prop = prop
    context.selection.dirty = true
    context.viewport.transformer.attach( prop )
    context.viewport.animTPose()
  },
  onSelectAnim( data ) 
  {
    this.trees.nodes.deselect_all()
    this.trees.props.deselect_all()
    let clip = context.data.anims.find( anim => anim.uuid === data.node.id )
    context.selection.all = data.selected
    context.selection.transformable = null
    context.selection.last = 
    context.selection.anim = clip
    context.selection.dirty = true
    context.viewport.transformer.detach()
    context.viewport.animPlay( clip )
  },
  update()
  {
    this.trees.nodes.settings.core.data = map_node( context.data.model )
    this.trees.props.settings.core.data = [ ...context.data.props.map( map_prop ) ]
    this.trees.anims.settings.core.data = [ ...context.data.anims.map( map_anim ) ]
    this.refresh()
  },
  refresh() {
    for ( let key in this.trees )
      this.trees[key].refresh(true)
  }
}

/// //// //// //// ////// //// /// //// /// //

class Row {
  constructor( property, isInvalid ) {
    const subs = [ ..."xyz" ]
    this.dom = $( `.i-vector-row.${property}` )[ 0 ]
    this.fields = $( `.i-vector-row.${property} input` ).toArray()
    this.fields.forEach( ( dom, i ) => {
      // $( dom ).on( "input keyup paste", e => {
      $( dom ).on( "keyup paste", e => {
        let sele = context.selection.transformable, val = $( dom ).val()
        if ( ! sele || isInvalid( val ) ) return
        sele[ property ][ subs[i] ] = val
        if ( $( this.dom ).is( ".linked") )
          subs.forEach( ( sub, i ) => sele[ property ][ sub ] = val )
      } )
    } )
  }

  // isValueInvalid( n ) { return isNaN( n ) }
  // setIsValid( func ) { this.isValid = func }
  // convertValue( n ) { return n }
  // setConvert( func ) { this.convertValue = func }
  // unconvertValue( n ) { return n }
  // setUnconvert( func ) { this.unconvertValue = func }

  updateMaybe( vector ) {
    const subs = [ ..."xyz" ]
    subs.forEach( ( sub, i ) => {
      if ( ! $(this.fields[i]).is(":focus") )
        $(this.fields[i]).val( vector[sub] ) 
    } )
  }
}

class Field {
  constructor( dom_selector, setter, getter ) {
    this.dom_selector = dom_selector
    this.setter = setter
    this.getter = getter

    let dom = $( this.dom_selector )
    let setval = () => setter( dom.val() )
    dom.bind( "keydown", "return", () => { setval(); dom.blur(); } )
    dom.blur( setval  )
    // dom.on( "input keyup paste",  )
    let animate = () => {
      try { dom.is( ":focus" ) ? null : dom.val( this.getter() ) } catch( e ) { }
      requestAnimationFrame( () => animate() )
    }
    animate()
  }
}

const inspector = 
{
  rows : {
    position : new Row( "position", n => isNaN(n) ),
    rotation : new Row( "rotation", n => isNaN(n) ),
    scale :    new Row( "scale", n => isNaN(n) || n == 0.0 ),
  },
  fields : {
    name : new Field( "#field-name", 
                      value => { context.selection.last.name = value; context.data.dirty=true; },
                      () => context.selection.last ? context.selection.last.name : "--" )
  },
  update() 
  {
    if ( context.selection.transformable )
      for ( let property in this.rows )
        this.rows[ property ].updateMaybe( context.selection.transformable[ property ] )
  }
}