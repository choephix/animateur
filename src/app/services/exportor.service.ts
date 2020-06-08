import { Injectable } from '@angular/core'
import { context, Events, Character } from '../services/main.service'
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter"
import * as THREE from "three"
import * as JSZip from "jszip"

const link = document.createElement( 'a' )
link.style.display = 'none'

const exporter = new GLTFExporter()
const zipper = new JSZip()

export enum ExportDestination { Download, LocalStorage, Firebase }

@Injectable({ providedIn: 'root' })
export class ExportorService 
{
  public get isBusy():boolean { return this._busy }
  private _busy:boolean = false

  constructor() { console.log( zipper ) }

  async saveZip( binary:boolean, destination:"download"|"storage"|"firebase" )
  {
    this._busy = true
    try {
      const zip = new JSZip()
      console.log( "hajime" )
      const results = await Promise.all( context.characters.map( c => this.convertCharacter( c, binary ) ) )
      console.log( "results: ", results )
      results.forEach( (r:any) => zip.file( r.filename, r.blob ) )
      console.log( "zip: ", zip )
      const zip_blob = await new Promise<Blob>( resolve => 
            zip.generateAsync({type : "blob",compression: "DEFLATE"}).then( resolve ) )

      switch( destination )
      {
        case "download": this.download( zip_blob, "characters.zip" ); break;
        case "storage":  this.saveToLocalStorage( zip_blob ); break;
        case "firebase": throw new Error("Not implemented..."); break;
      }
      
      console.log( "done ", zip_blob )
    } finally {
      this._busy = false
    }
  }

  saveToLocalStorage( blob:Blob ) {
    let fileReader = new FileReader()
    fileReader.onload = function (evt) {
        /// @ts-ignore
        var result = evt.target.result
        try { localStorage.setItem("zip", result as string ) }
        catch (e) { console.log("Storage failed: " + e) }
    }
    fileReader.readAsDataURL( blob )
  }

  download( blob:Blob, filename:string ) {
    link.href = URL.createObjectURL( blob )
    link.download = filename
    link.click()
  }

  async convertCharacter( character:Character, binary:boolean )
  {
    let model = character.model
    let anims = character.anims.toArray()
    let userData = character.makeUserData()
    return await this.exportToGLTF( model, anims, userData, binary )
  }

  async exportToGLTF( group:THREE.Object3D, animations:THREE.AnimationClip[], userData:object, binary:boolean ):Promise<Result>
  {
    console.log( group, animations, userData, binary )

    // let exportee = new THREE.Scene()
    // exportee.add( group )
    // exportee.add( group.clone( true ) )
    let exportee = group
    exportee.userData = userData

    return new Promise( ( resolve, reject ) => {
      try {
        exporter.parse( exportee, function ( data ) {
        // exporter.parse( group, function ( data ) {
          const name = group.name || "LeScene"
          let binary = data instanceof ArrayBuffer
          let output = binary ? data : JSON.stringify( data, null, 2 )
          let filename = `${ name }.${ binary ? "glb" : "gltf" }`
          let blob = binary ?
                    new Blob( [ output as string ], { type: 'text/plain' } ) :
                    new Blob( [ output as ArrayBuffer ], { type: 'application/octet-stream' } )
          resolve( new Result( blob, filename ) )
        }, { animations : animations, onlyVisible : false, binary : binary } )
      } catch( e ) { reject( e ) }
    } )
  }
}

class Result {
  constructor( public readonly blob:Blob, public readonly filename:string ) {}
}