
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
  trees: { nodes : null, props : null, anims : null },
  setup: function ()
  {
    let themes = { icons : false, responsive: true, ellipsis: true, }
      // plugins : [ "state" , "dnd" ],
      // state : { key : model.name || "default" },
    let settings = { core : { data : [], themes : themes } }

    this.trees.nodes = $('#subpanel-nodes tree').jstree( settings ).jstree( true )
    this.trees.props = $('#subpanel-props tree').jstree( settings ).jstree( true )
    this.trees.anims = $('#subpanel-anims tree').jstree( settings ).jstree( true )
  },
  update: function ( model, props, animations )
  {
    this.trees.nodes.settings.core.data = map_node( model )
    this.trees.props.settings.core.data = [ ...props.map( prop => prop.name ) ]
    this.trees.anims.settings.core.data = [ ...animations.map( animation => animation.name ) ]

    for ( let key in this.trees )
      this.trees[key].refresh(true)
  }
}