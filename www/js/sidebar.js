
function map_node( node, depth=0 ) {
  return {
    id : node.uuid,
    text : node.name,
    'state' : {
      'opened' : depth < 3,
      'selected' : false
    },
    children : node.children
                    .filter( child => child.name !== node.name )
                    .map( child => map_node( child, ++depth ) )
  }
}

export default
{
  trees: { nodes : null, props : null, animations : null },
  setup: function ()
  {
    this.trees.nodes = $('#subpanel-nodes tree').jstree( {
      core : {
        data : [],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
        }
      },
      plugins : [ "state" , "dnd" ],
      // state : { key : model.name || "default" },
    } ).jstree( true )

    this.trees.props = $( '#subpanel-props tree' ).jstree( {
      core : {
        data : [],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
          // variant : "large",
        }
      },
      // checkbox : { keep_selected_style : false },
      // plugins : [ "wholerow", "checkbox", "contextmenu" ]
    } ).jstree( true )

    this.trees.animations = $('#subpanel-animations tree').jstree( {
      core : {
        data : [],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
          // variant : "large",
        }
      },
    } ).jstree( true )
    console.log( this )
  },
  update: function ( model, props, animations )
  {
    this.trees.nodes.settings.core.data = map_node( model )
    this.trees.props.settings.core.data = [ ...props.map( prop => prop.name ) ]
    this.trees.animations.settings.core.data = [ ...animations.map( animation => animation.name ) ]

    for ( let key in this.trees )
      this.trees[key].refresh(true)
  }
}