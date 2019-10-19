function add_generic_shit( scene ) 
{
  var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
  var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
  var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
  scene.add( cube );
  var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
  scene.add( sphere )
}

const loaders = {
  gltf : new GLTFLoader( loadingManager ),
  fbx : new FBXLoader( loadingManager ),
  obj : new OBJLoader( loadingManager ),
  dae : new ColladaLoader( loadingManager ),
  load : function( data, file_extension, file_name ) {
    return new Promise( ( resolve_really ) => {
      let resolve = o => {
        o.name = o.name || file_name
        resolve_really( o )
      }
      switch ( file_extension ) {
        case "gltf":
        case "glb": this.gltf.load( data, resolve ); break;
        case "obj": this.obj.load( data, resolve ); break;
        case "dae": this.dae.load( data, o => resolve( o.scene ) ); break;
        case "fbx": this.fbx.load( data, resolve ); break;
        default: reject( `Sorry, no loaders for files with extension "${file_extension}"` )
      }
    } )
  }
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

loadedDataToTexture( data ) 
{
  var image = document.createElement('img');
  image.src = event.target.result;
  var texture = new THREE.Texture(image);
  texture.needsUpdate = true;

  viewport.scene.getObjectByName('Alpha_Surface').material.color = new THREE.Color(0xFFFFFF);
  viewport.scene.getObjectByName('Alpha_Surface').material.map = texture;
  viewport.scene.getObjectByName('Alpha_Surface').material.needsUpdate = true;

  console.log( viewport.scene.getObjectByName('Alpha_Surface').material )

  return texture
}