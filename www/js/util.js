import { context } from "./main.js"

const utils = {
  getByUuid( uuid )
  { 
    return context.viewport.scene.getObjectByProperty( "uuid", uuid ) ||
           context.data.anims.find( clip => clip.uuid === uuid )
  },
  getBone( name, node = undefined )
  {
    node = node || context.data.model
    if ( node.name.endsWith( name ) )
      return node
    for ( let child of node.children ) {
      let bone = this.getBone( name, child )
      if ( bone )
        return bone
    }
  },
  clipBoneName( originalName )
  {
    try { return originalName.match( /([A-Z])\w+/g )[0].toString() }
    catch( e ) { console.error( e ) ; return originalName ; }
  },
  setHidden( item, hidden )
  {
    hidden = hidden !== undefined ? hidden : ! item.visible
    item.userData.hidden = hidden
    item.visible = ! hidden
    context.data.dirty = true
  },
  deleteProps( ...props ) {
    for ( let prop of props ) {
      prop.parent.remove( prop )
      context.data.props.splice( context.data.props.indexOf( prop ), 1 )
    }
    context.data.dirty = true
    context.viewport.transformer.detach()
  },
  deleteAnimations( ...clips ) {
    for ( let clip of clips ) {
      context.data.anims.splice( context.data.anims.indexOf( clip ), 1 )
    }
    context.data.dirty = true
    context.viewport.animTPose()
  },
  cloneProp( prop ) {
    let clone = prop.clone()
    prop.parent.add( clone )
    context.data.props.push( clone )
    context.data.dirty = true
  },
  cloneAnimation( clip ) {
    let clone = clip.clone()
    context.data.anims.push( clone )
    context.viewport.animPlay( clone )
    context.data.dirty = true
  },

  //// ANIMANI
  
  makeSingleFrameAnimationFromFirstFrame( anim ) {
    let a = anim.clone()
    a.tracks.forEach( t => { 
      t.times = [ 0 ]
      t.values = t.values.slice( 0, t.name.endsWith(".quaternion") ? 4 : 3 ) 
    } )
    a.name += "-pose"
    return a
  },
  makeSingleFrameAnimationFromLastFrame( anim ) {
    let a = anim.clone()
    a.tracks.forEach( t => { 
      t.times = [ 0 ]
      t.values = t.values.slice( t.values.length - ( t.name.endsWith(".quaternion") ? 4 : 3 ) )
    } )
    a.name += "-pose"
    return a
  }
}

export default utils