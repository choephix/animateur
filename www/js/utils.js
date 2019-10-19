import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader } from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js'
import { ColladaLoader } from 'https://threejs.org/examples/jsm/loaders/ColladaLoader.js'

const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => $( "loading" ).show()
loadingManager.onLoad  = () => $( "loading" ).hide()

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
        default:
          alert( `Sorry, no loaders for files with extension "${file_extension}"` )
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
  constructor( element, allowMultiple=true ) 
  {
    element.ondragover = function(e) {
      if ( e.ctrlKey || e.altKey || $(element).is(":focus-within") ) 
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
      if ( e.ctrlKey || e.altKey || !e.dataTransfer.files.length ) 
        return true

      e.preventDefault()
      element.classList.remove("dragover")

      for ( let file of e.dataTransfer.files )
      {
        let ext = file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase()
        let filename = file.name.split('.')[0]
        // console.log( file )

        let reader = new FileReader()
        reader.onload = (event) => 
          loaders.load( event.target.result, ext, filename )
                .then( o => this.onAssetLoaded( o ) )
        reader.readAsDataURL( file )

        if ( ! allowMultiple )
          break
      }
        
      return false
    }
  }

  /// replace this function with your own callback...
  onAssetLoaded( result ) { console.log( result ) }
}