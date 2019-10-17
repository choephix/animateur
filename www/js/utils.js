import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

export class DropField 
{
  constructor( element, callback ) 
  {
    element.ondragover = function() {
      element.classList.add("dragover")
      return false;
    };

    element.ondragleave = function() {
      element.classList.remove("dragover")
      return false;
    };

    element.ondrop = (e) => 
    {
      e.preventDefault();
      element.classList.remove("dragover")

      var file = e.dataTransfer.files[0]
      var reader = new FileReader();
      console.log( file )

      reader.onload = (event) => {

        let data = event.target.result

        console.log( event.target, data )
        
        loader.parse( data, file.name, this.onAssetLoaded )

        return

        var image = document.createElement('img');
        image.src = event.target.result;
        var texture = new THREE.Texture(image);
        texture.needsUpdate = true;

        viewport.scene.getObjectByName('Alpha_Surface').material.color = new THREE.Color(0xFFFFFF);
        viewport.scene.getObjectByName('Alpha_Surface').material.map = texture;
        viewport.scene.getObjectByName('Alpha_Surface').material.needsUpdate = true;

        console.log( viewport.scene.getObjectByName('Alpha_Surface').material )
      };
      reader.readAsArrayBuffer( file )
      return false
    }
  }

  /// replace this function with your own callback...
  onAssetLoaded( result ) { console.log( result ) }
}