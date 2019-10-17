
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
  update: ( model, props, animations ) =>
  {
    $('#subpanel-nodes tree').jstree( {
      core : {
        data : [ map_node( model ) ],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
        }
      },
      plugins : [ "state" , "dnd" ],
      state : { key : model.name || "default" },
    } )

    $('#subpanel-props tree').jstree( {
      core : {
        data : [ ...props.map( prop => prop.name ) ],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
          // variant : "large",
        }
      },
      // checkbox : { keep_selected_style : false },
      // plugins : [ "wholerow", "checkbox", "contextmenu" ]
    } )

    $('#subpanel-animations tree').jstree( {
      core : {
        data : [ ...animations.map( animation => animation.name ) ],
        themes : {
          icons : false,
          responsive: true,
          ellipsis: true,
          // variant : "large",
        }
      },
    } )
  }
}