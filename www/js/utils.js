import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader } from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js'
import { ColladaLoader } from 'https://threejs.org/examples/jsm/loaders/ColladaLoader.js'

function test(...rest) { console.warn( "TEST TEST", ...rest )}

const loadingManager = new THREE.LoadingManager( test, test, test )
const loaders = {
  gltf : new GLTFLoader( loadingManager ),
  fbx : new FBXLoader( loadingManager ),
  obj : new OBJLoader( loadingManager ),
  dae : new ColladaLoader( loadingManager ),
  load : function( data, ext ) {
    return new Promise( ( resolve ) => {
      switch ( ext ) {
        case "gltf":
        case "glb": this.gltf.load( data, resolve ); break;
        case "fbx": resolve( this.fbx.parse( data ) ); break;
        case "obj": this.obj.load( data, resolve ); break;
        case "dae": this.dae.load( data, o => resolve( o.scene ) ); break;
        default:
          alert( `Sorry, no loaders for files with extension "${ext}"` )
          reject()
      }
    } )
  }
}

window.loaders = loaders

export const loadFromUrl = ( url ) => 
       new Promise( ( resolve ) => loaders.gltf.load( url, resolve ) )

export class DropField 
{
  constructor( element, callback ) 
  {
    element.ondragover = function(e) {
      if ( e.ctrlKey || e.altKey ) 
        return true
      e.preventDefault()
      element.classList.add("dragover")
      return false;
    };

    element.ondragleave = function(e) {
      if ( e.ctrlKey || e.altKey ) 
        return true
      e.preventDefault()
      element.classList.remove("dragover")
      return false;
    };

    element.ondrop = (e) => 
    {
      if ( e.ctrlKey || e.altKey ) 
        return true

      e.preventDefault()
      element.classList.remove("dragover")
      
      $( "loading" ).show()

      let file = e.dataTransfer.files[0]
      let ext = file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase()

      let reader = new FileReader()
      console.log( file )

      reader.onload = (event) => 
      {
        console.log( event.target )
        let data = event.target.result
        loaders.load( data, ext ).then( o => {
          $( "loading" ).hide()
          this.onAssetLoaded( o )
        } )
      }

      // if ( ext === "obj ")
        reader.readAsDataURL( file )
      // else
      //   reader.readAsArrayBuffer( file )
      return false
    }
  }

  dataToTexture( data ) 
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

  /// replace this function with your own callback...
  onAssetLoaded( result ) { console.log( result ) }
}