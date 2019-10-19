import { context } from "./main.js"

function map_node( node, depth=0 ) {
  return {
    id : node.uuid,
    text : node.name || node.uuid,
    type : node.object ? node.object.type : "default",
    state : { opened : depth < 3, selected : false },
    children : node.children
              .filter( child => child.name !== node.name )
              .map( child => map_node( child, ++depth ) )
  }
}
function map_prop( prop ) {
  return {
    id : prop.uuid,
    text : prop.name || prop.uuid,
  }
}
function map_anim( anim ) {
  return {
    id : anim.uuid,
    text : anim.name || anim.uuid,
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
    settings.plugins = [ "dnd" ]

    this.trees.nodes = $('#subpanel-nodes tree').jstree( settings ).jstree( true )
    this.trees.props = $('#subpanel-props tree').jstree( settings ).jstree( true )
    this.trees.anims = $('#subpanel-anims tree').jstree( settings ).jstree( true )
    
    $('#subpanel-nodes tree').on( "select_node.jstree", (e,d) => this.onSelectNode( d ) )
    $('#subpanel-props tree').on( "select_node.jstree", (e,d) => this.onSelectProp( d ) )
    $('#subpanel-anims tree').on( "select_node.jstree", (e,d) => this.onSelectAnim( d ) )
    $('tree').on( "select_node.jstree", (e,d) => console.log( context.selection.last ) )
    
    $('#subpanel-props tree').bind( "keydown", "del", e => {
      let uuids = this.trees.props.get_selected(false)
      if ( ! confirm( `You are about to delete the following props:\n${ uuids.join("\n") }` ) )
        return
      for ( let i = context.data.props.length - 1 ; i >= 0 ; i-- )
      {
        let prop = context.data.props[ i ]
        if ( uuids.indexOf( prop.uuid ) < 0 )
          continue
        prop.parent.remove( prop )
        context.data.props.splice( i, 1 )
      }
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
    let node = context.viewport.scene.getObjectByProperty( "uuid", data.node.id )
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
    let prop = context.viewport.scene.getObjectByProperty( "uuid", data.node.id )
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
      $( dom ).on( "input keyup paste", e => {
        let sele = context.selection.transformable, val = $(dom).val()
        if ( ! sele || isInvalid( val ) ) return
        sele[ property ][ subs[i] ] = val
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
    if ( ! $( this.dom ).is(":focus-within") ) {
      $(this.fields[0]).val( vector.x )
      $(this.fields[1]).val( vector.y )
      $(this.fields[2]).val( vector.z )
    }
  }
}

class Field {
  constructor( dom_selector, setter, getter ) {
    this.dom_selector = dom_selector
    this.setter = setter
    this.getter = getter

    let dom = $( this.dom_selector )
    let setval = () => setter( dom.val() )
    dom.bind( "keydown", "return", setval )
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
                      value => { context.selection.last.name = value; context.selection.dirty=true; },
                      () => context.selection.last ? context.selection.last.name : "--" )
  },
  update() 
  {
    if ( context.selection.transformable )
      for ( let property in this.rows )
        this.rows[ property ].updateMaybe( context.selection.transformable[ property ] )
  }
}