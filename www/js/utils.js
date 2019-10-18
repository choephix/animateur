import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'

const loadingManager = new THREE.LoadingManager()
const loaders = {
  gltf : new GLTFLoader( loadingManager ),
  fbx : new FBXLoader( loadingManager ),

  load : function( data, ext ) {
    return new Promise( ( resolve ) => {
      switch ( ext ) {
        case "gltf":
        case "glb": this.gltf.parse( data, "SCENO", resolve ); break;
        case "fbx": resolve( this.fbx.parse( data ) ); break;
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
      $( "loading" ).show()
      return false;
    };

    element.ondragleave = function(e) {
      if ( e.ctrlKey || e.altKey ) 
        return true
      e.preventDefault()
      element.classList.remove("dragover")
      $( "loading" ).hide()
      return false;
    };

    element.ondrop = (e) => 
    {
      if ( e.ctrlKey || e.altKey ) 
        return true

      e.preventDefault()
      element.classList.remove("dragover")
      $( "loading" ).hide()

      let file = e.dataTransfer.files[0]
      let reader = new FileReader();
      console.log( file )

      reader.onload = (event) => 
      {
        console.log( event.target )
        let data = event.target.result
        let ext = file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase()
        loaders.load( data, ext ).then( this.onAssetLoaded )
      }

      reader.readAsArrayBuffer( file )
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