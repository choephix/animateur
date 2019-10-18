import { context } from "./main.js"

function map_node( node, depth=0 ) {
  return {
    id : node.uuid,
    text : node.name,
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
    text : prop.name,
  }
}
function map_anim( anim ) {
  return {
    id : anim.uuid,
    text : anim.name,
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
    
    $('#subpanel-nodes tree').on( "select_node.jstree", (e,d) => this.onSelectNode( e, d ) )
    $('#subpanel-props tree').on( "select_node.jstree", (e,d) => this.onSelectProp( e, d ) )
    $('#subpanel-anims tree').on( "select_node.jstree", (e,d) => this.onSelectAnim( e, d ) )
    
    function onFrame() {
      inspector.update()
      requestAnimationFrame( () => onFrame() )
    }
    
    $('#subpanel-props tree').bind( "keydown", "del", e => {
      this.trees.props.get_selected(false).forEach( uuid => {
        let prop = context.viewport.scene.getObjectByProperty( "uuid", uuid )
        context.viewport.transformer.detach()
        console.log( "will delete ", prop )
        prop.parent.remove( prop )
        // context.viewport.scene.remove( prop )
        context.data.props.splice( context.data.props.indexOf( prop ), 1 )
        this.update()
      } )
    } )

    onFrame()
  },
  onSelectNode( event, data ) 
  {
    console.log( data.node )

    context.viewport.mixer.stopAllAction()

    let node = context.viewport.scene.getObjectByProperty( "uuid", data.node.id )

    context.selection.node = node
    context.selection.transformable = node
    context.viewport.transformer.attach( node )
  },
  onSelectProp( event, data ) 
  {
    console.log( data.node.data )

    context.viewport.animTPose()

    let prop = context.viewport.scene.getObjectByProperty( "uuid", data.node.id )

    context.selection.prop = 
    context.selection.transformable = prop
    context.viewport.transformer.attach( prop )
  },
  onSelectAnim( event, data ) 
  {
    console.log( data.node.data )

    let clip = context.data.anims.find( anim => anim.uuid === data.node.data.uuid )
    context.selection.anim = clip
    context.viewport.animPlay( clip )
    context.viewport.transformer.detach()
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

function getSele() {
  return context.selection.transformable
}

class Row {
  constructor( property, isInvalid ) {
    const subs = [ ..."xyz" ]
    this.dom = $( `.i-vector-row.${property}` )[ 0 ]
    this.fields = $( `.i-vector-row.${property} input` ).toArray()
    this.fields.forEach( ( dom, i ) => {
      $( dom ).on( "input keyup paste", e => {
        let sele = getSele(), val = $(dom).val()
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

const inspector = 
{
  rows : {
    position : new Row( "position", n => isNaN(n) ),
    rotation : new Row( "rotation", n => isNaN(n) ),
    scale :    new Row( "scale", n => isNaN(n) || n == 0.0 ),
  },
  update() 
  {
    let sele = getSele()
    if ( ! sele ) return
    for ( let property in this.rows )
      this.rows[ property ].updateMaybe( sele[ property ] )
  }
}