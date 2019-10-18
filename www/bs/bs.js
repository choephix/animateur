function add_generic_shit( scene ) 
{
  var material = new THREE.MeshNormalMaterial( { color: 0xCCff00 } );
  var material = new THREE.MeshStandardMaterial( { color: 0xCCff00 } );
  var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );
  scene.add( cube );
  var sphere = new THREE.Mesh( new THREE.SphereGeometry( .5, 32, 32 ), material );
  scene.add( sphere )
}