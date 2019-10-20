import { context } from "./main.js"

function getByUuid( uuid )
{ return context.viewport.scene.getObjectByProperty( "uuid", uuid ) }

function getBone( name, node = undefined )
{
  node = node || context.data.model
  if ( node.name.endsWith( name ) )
    return node
  for ( let child of node.children ) {
    let bone = getBone( name, child )
    if ( bone )
      return bone
  }
}
function clipBoneName( originalName )
{
  return originalName.match( /([A-Z])\w+/g )[0].toString()
}

function makeSingleFrameAnimationFromFirstFrame( anim ) {
  let a = anim.clone()
  a.tracks.forEach( t => { 
    t.times = [ 0 ]
    t.values = t.values.slice( 0, t.name.endsWith(".quaternion") ? 4 : 3 ) 
  } )
  a.name += "-pose"
  return a
}

function makeSingleFrameAnimationFromLastFrame( anim ) {
  let a = anim.clone()
  a.tracks.forEach( t => { 
    t.times = [ 0 ]
    t.values = t.values.slice( t.values.length - ( t.name.endsWith(".quaternion") ? 4 : 3 ) )
  } )
  a.name += "-pose"
  return a
}

export default { 
  getByUuid, getBone, clipBoneName, 
  makeSingleFrameAnimationFromFirstFrame,
  makeSingleFrameAnimationFromLastFrame,
}