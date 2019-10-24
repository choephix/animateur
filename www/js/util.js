import { context } from "./main.js"

Array.prototype.toSet = function() {
  return new Set( this )
}
Array.prototype.mapToObject = function( func ) {
  const result = {}
  this.forEach( ( o, i ) => {
    let r = func( o, i )
    let [ key, value ] = Array.isArray( r ) ? [ r[0], r[1] ] : [ r, o ]
    result[ key ] = value
  } )
  return result
}

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
  /// find all in children
  findAll : ( root, func ) => {
    let results = []
    root.traverse( child => func( child ) ? results.push( child ) : null )
    return results
  },
  /// find first in children
  // findFirst : ( parent, func ) => {
  //   if ( func( parent ) )
  //     return parent
  //   if ( ! parent.children.length )
  //     return null
  //   for ( let child of parent.children )
  //     if ( func( child ) )
  //       return child
  // }

  setHidden( item, hidden )
  {
    hidden = hidden !== undefined ? hidden : ! item.visible
    item.userData.hidden = hidden
    item.visible = ! hidden
    context.data.dirty = true
  },
  addChild( parent, name, userData={} )
  {
    let child = new THREE.Object3D()
    child.name = name
    child.userData = userData
    parent.add( child )
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
    context.viewport.mixer.stopAllAction()
  },
  cloneProp( prop ) {
    let clone = prop.clone()
    prop.parent.add( clone )
    context.data.props.push( clone )
    context.data.dirty = true
  },
  cloneAnimation( clip ) {
    this.addAnimation( clip.clone() )
  },
  addAnimation( clip ) {
    context.data.anims.push( clip )
    context.viewport.animPlay( clip )
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