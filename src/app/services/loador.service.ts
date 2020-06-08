import { Injectable } from '@angular/core'

import * as JSZip from "jszip"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

import * as THREE from "three"
import * as $ from 'jquery'
import { Character } from './main.service';

@Injectable({ providedIn: 'root' })
export class LoadorService
{
  public get isBusy():boolean { return this._busy }
  private _busy:boolean = false
  
  private loadingManager = new THREE.LoadingManager()
  private loaders = {
    gltf: new GLTFLoader( this.loadingManager ),
    fbx : new FBXLoader( this.loadingManager ),
    obj : new OBJLoader( this.loadingManager ),
    dae : new ColladaLoader( this.loadingManager ),
    svg : new SVGLoader( this.loadingManager ),
  }

  fileResolvers = {
    characters : async ( data:string, file_extension:string, file_name:string ):Promise<Character> => {
      let [ group, animations ] = await new Promise( ( resolve, reject ) => {
        switch ( file_extension ) {
          case "gltf":
          case "glb": this.loaders.gltf.load( data, gltf => resolve( [ gltf.scene, gltf.animations ] ) ); break;
          case "fbx": this.loaders.fbx.load( data, (o:any) => resolve( [ o, o.animations || [] ] ) ); break;
          default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
        }
      } )
  
      console.log( group )
      
      let model = null
  
      if ( group.children.length === 0 )
      {
        console.warn( "No 3D objects found..." )
      }
      else
      if ( group.children.length === 1)
      {
        // model = gltf.scene.children.shift()
        model = group.children[ 0 ]
      }
      else
      {
        model = new THREE.Object3D()
        model.scale.setScalar( .01 )
        // gltf.scene.children.forEach( o => model.add( o ) )
        while ( group.children.length )
          model.add( group.children.shift() )
      }
  
      return new Character( model , animations )
    },
    model : async ( data:string, file_extension:string, file_name:string ) => {
      let model:THREE.Object3D = await new Promise( ( resolve, reject ) => {
        switch ( file_extension ) {
          case "gltf":
          case "glb": this.loaders.gltf.load( data, o => resolve( o.scene.children[0] ) ); break;
          case "dae": this.loaders.dae.load( data, o => resolve( o.scene.children[0] ) ); break;
          case "obj": this.loaders.obj.load( data, o => resolve( o ) ); break;
          case "fbx": this.loaders.fbx.load( data, o => resolve( o ) ); break;
          default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
        }
      } )
      console.log( model )
      model.name = model.name || file_name
      return model
    },
    props : async ( data:string, file_extension:string, file_name:string ) => {
      let props:THREE.Object3D[] = await new Promise( ( resolve, reject ) => {
        switch ( file_extension ) {
          case "gltf":
          case "glb": this.loaders.gltf.load( data, o => resolve( o.scene.children ) ); break;
          case "obj": this.loaders.obj.load( data, o => resolve( [o] ) ); break;
          case "dae": this.loaders.dae.load( data, o => resolve( [o.scene] ) ); break;
          case "fbx": this.loaders.fbx.load( data, o => resolve( [o] ) ); break;
          case "svg": this.loaders.svg.load( data, o => {
            let paths = o.paths
            let group = new THREE.Group()
            for ( var i = 0; i < paths.length; i ++ ) {
              var path = paths[ i ]
              var material = new THREE.MeshBasicMaterial( {
                color: o.xml.fgColor,
                side: THREE.DoubleSide,
                depthWrite: false
              } );
              var shapes = path.toShapes( true, false )
              for ( var j = 0; j < shapes.length; j ++ ) {
                var shape = shapes[ j ]
                var geometry = new THREE.ShapeBufferGeometry( shape )
                var mesh = new THREE.Mesh( geometry, material )
                group.add( mesh )
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
          let del = false
          del = del || o.type.indexOf("Light") > -1
          del = del || o.type.indexOf("Camera") > -1
          del = del || o.type === "SkinnedMesh"
          del = del || o.type === "Bone"
          if ( del ) todel.push( o )
        } )
      } )
      todel.forEach( o => o.parent.remove( o ) )
  
      if ( props.length === 1 ) props[ 0 ].name = file_name
      else props.forEach( prop => prop.name = prop.name || file_name )
      return props
    },
    anims : async ( data:string, file_extension:string, file_name:string ) => {
      let animations:THREE.AnimationClip[] = await new Promise( ( resolve, reject ) => {
        switch ( file_extension ) {
          case "gltf":
          case "glb": this.loaders.gltf.load( data, gl => resolve( gl.animations ) ); break;
          // case "fbx": this.loaders.fbx.load( data, group => console.warn( group ), null, e => console.error( e ) );
          // case "fbx": this.loaders.fbx.load( data, group => resolve( group.animations ) ); break;
          case "fbx": this.loaders.fbx.load( data, (group:any) => resolve( group.animations ) ); break;
          default: reject( `Sorry, can't load files with extension "${file_extension}" here` )
        }
      } )
      animations = animations.filter( a => a.duration > 0.0 )
      if ( animations.length === 1 )
        animations[ 0 ].name = file_name
      animations.forEach( a => a.name = a.name.match(/[\w-]+/g).join('-').toLowerCase() )
      return animations
    },
  }

  constructor() {
    this.loadingManager.onStart = () => this._busy = true
    this.loadingManager.onLoad  = () => this._busy = false
    this.loadingManager.onError = () => this._busy = false
    // loadingManager.onStart = () => $( ".loading" ).show()
    // loadingManager.onLoad  = () => $( ".loading" ).hide()
    // loadingManager.onError = () => $( ".loading" ).hide()

    /// @ts-ignore
    window.loador = this
  }

  async loadFromUrl( url:string ) {
    return await new Promise( ( resolve ) => this.loaders.gltf.load( url, resolve ) )
  }

  async loadZipFromLocalStorage( funcLoaded:Function ) {

    function dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
    }

    let data = localStorage["zip"]

    let o = await JSZip.loadAsync( dataURLtoBlob( data ) )
    console.log( o.files )

    const funcResolver = this.fileResolvers.characters

    let promises = []
    for ( let zip_filename in o.files )
    {
      promises.push( new Promise( async(resolve) => {
        let file = o.files[ zip_filename ]
        let [ zfext, zfname ] = this.getFileNameAndExtension( file )
        let blob = await file.async( "blob" )
        let url = URL.createObjectURL( blob )
        funcResolver( url, zfext, zfname ).then( resolve ).catch( this.onError ) 
      } ).catch( this.onError ) )
    }

    Promise.all( promises ).then( a => funcLoaded( ...[].concat( ...a ) ) ).catch( this.onError )

    // let fileReader = new FileReader()
    // fileReader.onload = function (evt) {
    //     /// @ts-ignore
    //     var result = evt.target.result
    //     try { localStorage.setItem("zip", result) }
    //     catch (e) { console.log("Storage failed: " + e) }
    // }
    // fileReader.
  }

  makeDropField( elementId, funcResolver:(data,file_extension,file_name)=>any, funcLoaded:Function ) {
    const element = document.getElementById( elementId )
    
    element.ondragover = e => {
      if ( e.ctrlKey || e.altKey || $(element).is(":focus-within") ) 
        return true
      e.preventDefault()
      element.classList.add("dragover")
      return false;
    }

    element.ondragleave = e => {
      if ( e.ctrlKey || e.altKey ) 
        return true
      e.preventDefault()
      element.classList.remove("dragover")
      return false;
    }

    element.ondrop = async(e:DragEvent) => {
      if ( e.ctrlKey || e.altKey || !e.dataTransfer.files.length ) 
        return true

      e.preventDefault()
      element.classList.remove("dragover")

      let promises = []
      /// @ts-ignore
      for ( let file of e.dataTransfer.files )
      {
        let [ fileext, filename ] = this.getFileNameAndExtension( file )
        // console.log( file )
          
        if ( fileext === "zip" )
        {
          let ab:ArrayBuffer = await new Promise( resolve => {
            let zip_reader = new FileReader()
            zip_reader.onload = async(event:any) => resolve( event.target.result )
            zip_reader.readAsArrayBuffer( file )
          } )
          let o = await JSZip.loadAsync( ab )
          for ( let zip_filename in o.files )
          {
            promises.push( new Promise( async(resolve) => {
              let file = o.files[ zip_filename ]
              let [ zfext, zfname ] = this.getFileNameAndExtension( file )
              let blob = await file.async( "blob" )
              let url = URL.createObjectURL( blob )
              funcResolver( url, zfext, zfname ).then( resolve ).catch( this.onError ) 
            } ).catch( this.onError ) )
          }
        } else {
          promises.push( new Promise( async(resolve) => {
            let reader = new FileReader()
            reader.onload = (event:any) => {
              funcResolver( event.target.result, fileext, filename ).then( resolve ).catch( this.onError )
            }
            reader.readAsDataURL( file )
          } ).catch( this.onError ) )
        }
      }

      Promise.all( promises ).then( a => funcLoaded( ...[].concat( ...a ) ) ).catch( this.onError )
        
      return false
    }
  }

  getFileNameAndExtension( file:{name:string} ) {
    return [
      file.name.match( /\.([0-9a-z]+)(?:[\?#]|$)/i )[1].toLowerCase() ,
      file.name.split( '.' )[ 0 ]
    ]
  }

  onError( e ) { 
    console.error( e )
    // try { this._busy = false }
    // catch( e ) { console.error( e ) }
  }
}