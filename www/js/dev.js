import { context } from "./main.js"
import util from "./util.js"

export default {
  fixAnimationHips( clip = new THREE.AnimationClip() )
  {
    const track = clip.tracks.find( o => o.name === "mixamorigHips.position" )
    if ( ! track )
      console.error( "no hips track--" )
    else
    {
      const duration = clip.duration
      function setAt( index = 0, v = new THREE.Vector3() ) {
        track.values[ index * 3 + 0 ] = v.x
        track.values[ index * 3 + 1 ] = v.y
        track.values[ index * 3 + 2 ] = v.z
      }
      console.log( JSON.stringify( track ) )

      // const origin = new THREE.Vector3( ...track.values )
      const v = new THREE.Vector3()
      track.times.forEach( ( time, i ) => {
        setAt( i, v )
      } )

      console.log( JSON.stringify( track ) )
    }
  }
}