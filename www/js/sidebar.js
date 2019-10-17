import { context } from "./main.js"

function map_node( node, depth=0 ) {
  return {
    id : node.uuid,
    text : node.name,
    data : node,
    type : node.object ? node.object.type : "default",
    state : {
      opened : depth < 3,
      selected : false
    },
    children : node.children
              .filter( child => child.name !== node.name )
              .map( child => map_node( child, ++depth ) )
  }
}
function map_prop( prop ) {
  return {
    id : prop.uuid,
    text : prop.name,
    data : prop,
  }
}
function map_anim( anim ) {
  return {
    id : anim.uuid,
    text : anim.name,
    data : anim,
  }
}

export default
{
  trees: { nodes : null, props : null, anims : null },
  setup: function ()
  {
    // plugins : [ "state" , "dnd" ],
    // state : { key : model.name || "default" },
    let themes = { icons : false, responsive: true, ellipsis: true, }
    let types = {
      default: {
        // type_attr : "object_type",
        select_node : console.warn
      },
      Bone: {
      },
      Object3D: {
      },
      Mesh: {
      },
      SkinnedMesh: {
      },
      TYPE: {}
    }
    let settings = { core: { data: [], multiple: false, themes: themes }, types: types, plugins: [ "types" ] }

    this.trees.nodes = $('#subpanel-nodes tree').jstree( settings ).jstree( true )
    this.trees.props = $('#subpanel-props tree').jstree( settings ).jstree( true )
    this.trees.anims = $('#subpanel-anims tree').jstree( settings ).jstree( true )
    
    $('#subpanel-nodes tree').on( "select_node.jstree", (e,d) => this.onSelect( e, d ) )
    $('#subpanel-props tree').on( "select_node.jstree", (e,d) => this.onSelect( e, d ) )
    $('#subpanel-anims tree').on( "select_node.jstree", (e,d) => this.onSelect( e, d ) )
  },
  onSelect( event, data ) 
  {
    // context.selection.node = data.node.data
    // console.log( data.node.data )
  },
  update: function ( model, props, animations )
  {
    this.trees.nodes.settings.core.data = map_node( model )
    this.trees.props.settings.core.data = [ ...props.map( map_prop ) ]
    this.trees.anims.settings.core.data = [ ...animations.map( map_anim ) ]

    for ( let key in this.trees )
      this.trees[key].refresh(true)
  }
}