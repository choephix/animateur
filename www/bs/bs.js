function add_generic_shit( scene ) 
{
  var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
  var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
  var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
  scene.add( cube );
  var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
  scene.add( sphere )

  // materials.pickr_a.setColor( model.children[1].material.color.getHexString() )
  // materials.pickr_b.setColor( model.children[2].material.color.getHexString() )
  // context.data.model.children[ i ].material.color = new THREE.Color( hex )
  // context.data.model.children[ i ].material.needsUpdate = true
  
  const pickr = Pickr.create({
    el: 'button.pick-color-1',
    comparison: false,
    theme: 'nano', // or 'classic', or 'monolith', or 'nano'
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: true
        }
    }
  });
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