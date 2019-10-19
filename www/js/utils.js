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
}

export const fileResolvers = {
  scene : async function( data, file_extension, file_name ) {
    let gltf = await new Promise( ( resolve, reject ) => {
      switch ( file_extension ) {
        case "gltf":
        case "glb": loaders.gltf.load( data, resolve ); break;
        default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
      }
    } )
    console.log( gltf )
    let model = gltf.scene.children.shift()
    while ( gltf.scene.children.length )
      context.data.model.add( gltf.scene.children.shift() )
    
    let animations = gltf.animations

    return [ model , animations ]
  },
  props : async function( data, file_extension, file_name ) {
    let props = await new Promise( ( resolve, reject ) => {
      switch ( file_extension ) {
        case "gltf":
        case "glb": loaders.gltf.load( data, o => resolve( o.scene.children ) ); break;
        case "obj": loaders.obj.load( data, o => resolve( [o] ) ); break;
        case "dae": loaders.dae.load( data, o => resolve( [o.scene] ) ); break;
        case "fbx": loaders.fbx.load( data, o => resolve( [o] ) ); break;
        default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
      }
    } )
    props = [].concat( ...props )
    if ( props.length === 1 ) props[ 0 ].name = file_name
    else props.forEach( prop.name = prop.name || file_name )
    return props
  },
  anims : async function( data, file_extension, file_name ) {
    let animations = await new Promise( ( resolve, reject ) => {
      switch ( file_extension ) {
        case "fbx": loaders.fbx.load( data, group => resolve( group.animations ) ); break;
        default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
      }
    } )
    animations = animations.filter( a => a.duration > 0.0 )
    if ( animations.length === 1 )
      animations[ 0 ].name = file_name
    return animations
  },
}

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
    }

    element.ondragleave = function(e) {
      if ( e.ctrlKey || e.altKey ) 
        return true
      e.preventDefault()
      element.classList.remove("dragover")
      return false;
    }

    element.ondrop = (e) => 
    {
      if ( e.ctrlKey || e.altKey || !e.dataTransfer.files.length ) 
        return true

      e.preventDefault()
      element.classList.remove("dragover")

      let promises = []
      for ( let file of e.dataTransfer.files )
      {
        let ext = file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase()
        let filename = file.name.split( '.' )[ 0 ]
        // console.log( file )

        promises.push( new Promise( resolve => {
          let reader = new FileReader()
          reader.onload = (event) => this.funcResolver( event.target.result, ext, filename ).then( resolve )
          reader.readAsDataURL( file )
        } ) )

        // if ( ! allowMultiple )
        //   break
      }
      console.log( e.dataTransfer.files, promises )
      Promise.all( promises )
        .then( a => this.funcLoaded( ...[].concat( ...a ) ) )
        .catch( console.error )
        
      return false
    }
  }

  funcResolver() { throw new ReferenceError( "You didn't assign your 'resolver' function...") }
  resolver( func ) { this.funcResolver = func; return this; }

  funcLoaded() { throw new ReferenceError( "You didn't assign your 'loaded' function...") }
  loaded( func ) { this.funcLoaded = func; return this; }
}

export const loadFromUrl = ( url ) => 
       new Promise( ( resolve ) => loaders.gltf.load( url, resolve ) )