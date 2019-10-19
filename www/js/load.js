import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'https://threejs.org/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader } from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js'
import { ColladaLoader } from 'https://threejs.org/examples/jsm/loaders/ColladaLoader.js'
import { SVGLoader } from 'https://threejs.org/examples/jsm/loaders/SVGLoader.js'

const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => $( "loading" ).show()
loadingManager.onLoad  = () => $( "loading" ).hide()
loadingManager.onError = () => $( "loading" ).hide()

const loaders = {
  gltf: new GLTFLoader( loadingManager ),
  fbx : new FBXLoader( loadingManager ),
  obj : new OBJLoader( loadingManager ),
  dae : new ColladaLoader( loadingManager ),
  svg : new SVGLoader( loadingManager ),
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
      model.add( gltf.scene.children.shift() )
    
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
        case "svg": loaders.svg.load( data, o => {
          var paths = o.paths;
          var group = new THREE.Group();
          for ( var i = 0; i < paths.length; i ++ ) {
            var path = paths[ i ];
            var material = new THREE.MeshBasicMaterial( {
              color: path.color,
              side: THREE.DoubleSide,
              depthWrite: false
            } );
            var shapes = path.toShapes( true );
            for ( var j = 0; j < shapes.length; j ++ ) {
              var shape = shapes[ j ];
              var geometry = new THREE.ShapeBufferGeometry( shape );
              var mesh = new THREE.Mesh( geometry, material );
              group.add( mesh );
            }
          }
          resolve( [ group ] )

        } ); break;
        default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
      }
    } )
    props = [].concat( ...props )
    
    let todel = []
    props.forEach( prop => {
      prop.traverse( o => { 
        if ( o.type.indexOf("Light") > -1 )
          todel.push( o )
        if ( o.type === "SkinnedMesh" )
          todel.push( o )
        if ( o.type === "Bone" )
          todel.push( o )
      } )
    } )
    props.forEach( prop => {
      if ( prop.type === "Group" || prop.type === "Object3D" )
        if ( prop.children.length < 1 )
          todel.push( o )
    } )
    todel.forEach( o => o.parent.remove( o ) )

    if ( props.length === 1 ) props[ 0 ].name = file_name
    else props.forEach( prop => prop.name = prop.name || file_name )
    return props
  },
  anims : async function( data, file_extension, file_name ) {
    let animations = await new Promise( ( resolve, reject ) => {
      switch ( file_extension ) {
        case "gltf":
        case "glb": loaders.gltf.load( data, gl => resolve( gl.animations ) ); break;
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

      $( "loading" ).show()

      let promises = []
      for ( let file of e.dataTransfer.files )
      {
        let ext = file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase()
        let filename = file.name.split( '.' )[ 0 ]
        // console.log( file )

        promises.push( new Promise( resolve => {
          let reader = new FileReader()
          reader.onload = (event) => this.funcResolver( event.target.result, ext, filename )
                                          .then( resolve ).catch( this.onError )
          reader.readAsDataURL( file )
        } ).catch( this.onError ) )

        // if ( ! allowMultiple )
        //   break
      }
      Promise.all( promises )
        .then( a => this.funcLoaded( ...[].concat( ...a ) ) )
        
      return false
    }
  }

  onError( e ) { console.error( e ); $( "loading" ).hide(); }

  funcResolver() { throw new ReferenceError( "You didn't assign your 'resolver' function...") }
  resolver( func ) { this.funcResolver = func; return this; }

  funcLoaded() { throw new ReferenceError( "You didn't assign your 'loaded' function...") }
  loaded( func ) { this.funcLoaded = func; return this; }
}

export const loadFromUrl = ( url ) => 
       new Promise( ( resolve ) => loaders.gltf.load( url, resolve ) )