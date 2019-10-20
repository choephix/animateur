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


export default { getByUuid, getBone, clipBoneName }