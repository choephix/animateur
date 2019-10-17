
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
  update: ( model ) =>
  {
    let jstree_data = {
      core : {
        data : [ map_node( model ) ],
        themes : {
          icons : false,
          // variant : "large"
        }
      },
      // "checkbox" : { "keep_selected_style" : false },
      // "plugins" : [ "wholerow", "checkbox" ]
    }

    // console.log( jstree_data )

    $('#node-tree').jstree( jstree_data )
  }
}