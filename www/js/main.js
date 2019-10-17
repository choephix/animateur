import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js'
import viewport from './viewport.js'
import sidebar from './sidebar.js'
import exporter from './export.js'

let loadingManager = new THREE.LoadingManager()
var loader = new GLTFLoader( loadingManager )

loader.load( 'gltf/default.gltf', onLoaded ) //// default.gltf

function onLoaded( gltf ) 
{
  $( "loading" ).hide()

  console.log( gltf )
  
  let model = gltf.scene.children.shift()
  let props = gltf.scene.children.concat()
  let animations = gltf.animations
  // console.log( gltf, model, props, animations )

  // model.userData = { message : "Here I am!" }
  // model.children[0].userData = { message : "Here I am!" }
  // model.children[1].userData = { message : "Here I am!" }
  // model.children[2].userData = { message : "Here I am!" }
  // animations[ 0 ].userData = { message : "Here I am!" }

  viewport.setup( model )
  sidebar.update( model, props, animations )

  console.log( viewport.scene )

  $( "button.save" ).click( e => exporter.save( model, animations, 
                                                e.currentTarget.getAttribute("binary") == "true",
                                                e.currentTarget.getAttribute("local") == "true" ) )

  setupDragDrop()
}

function setupDragDrop() {
  var holder = document.getElementById('viewport');

  holder.ondragover = function() {
    viewport.scene.background = new THREE.Color(0x001166)
    return false;
  };

  holder.ondragend = function() {
    viewport.scene.background = new THREE.Color(0x0)
    return false;
  };

  holder.ondrop = function(e) {
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