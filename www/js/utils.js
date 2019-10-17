export class DropField 
{
  constructor( element, callback ) 
  {
    element.ondragover = function() {
      element.classList.add("dragover")
      // console.log( element )
      return false;
    };

    element.ondragleave = function() {
      element.classList.remove("dragover")
      // console.log( element )
      return false;
    };

    element.ondrop = function(e) {
      this.className = '';
      e.preventDefault();

      var file = e.dataTransfer.files[0]
      var reader = new FileReader();
      console.log( file )
      reader.onload = function(event) {

        var image = document.createElement('img');
        image.src = event.target.result;
        var texture = new THREE.Texture(image);
        texture.needsUpdate = true;

        viewport.scene.getObjectByName('Alpha_Surface').material.color = new THREE.Color(0xFFFFFF);
        viewport.scene.getObjectByName('Alpha_Surface').material.map = texture;
        viewport.scene.getObjectByName('Alpha_Surface').material.needsUpdate = true;

        console.log( viewport.scene.getObjectByName('Alpha_Surface').material )
      };
      reader.readAsDataURL(file);
      return false;
    }
  }
}