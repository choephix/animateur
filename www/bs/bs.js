function add_generic_shit( scene ) 
{
  var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
  var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
  var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
  scene.add( cube );
  var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
  scene.add( sphere )
}

function tree() {

    let plugins = [ "state" , "dnd" ]
    let state = { key : model.name || "default" }
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

}