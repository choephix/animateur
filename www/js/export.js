import { GLTFExporter } from "https://threejs.org/examples/jsm/exporters/GLTFExporter.js"

const link = document.createElement( 'a' )
link.style.display = 'none'

const exporter = new GLTFExporter()

export default
{
  save: ( model, animations, binary, local ) => 
  {
    model.userData = { message : "This worked, damnit!" }

    exporter.parse( model, function ( data ) {
      const name = model.name || "LeScene"
      let binary = data instanceof ArrayBuffer
      let output = binary ? data : JSON.stringify( data, null, 2 )
      let filename = `${ name }.${ binary ? "glb" : "gltf" }`
      if ( !local ) {
        saveToServer( output, filename )
      } else if ( binary ) {
        saveArrayBuffer( output, filename )
      } else {
        saveString( output, filename )
      }
    }, { animations : animations, onlyVisible : false, binary : binary } )
  }
}

function saveString( text, filename ) 
{ download( new Blob( [ text ], { type: 'text/plain' } ), filename ) }
function saveArrayBuffer( buffer, filename ) 
{ download( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename ) }

function download( blob, filename ) {
  link.href = URL.createObjectURL( blob )
  link.download = filename
  link.click()
}

function saveToServer( data, filename ) {
  $.post( "/api/save", data, console.warn, console.error )
}