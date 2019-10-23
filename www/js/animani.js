import { context } from "./main.js"
// import util from "./util.js"
// import THIS from "./animani.js"

const __ = {
  KeyFrame : class {
  },
  KeyFrameTrack : class {
    name = "untitled"
    frames = []
  },
}

export default { 
  animationBar : {
    slider : $( "#slider" ).slider({
      orientation: "horizontal",
      range: "min",
      step: .001,
      slide: function( event, ui ) {
        context.viewport.mixer.currentAction.paused = true
        context.viewport.mixer.currentAction.time = ui.value
      },
      change: function( event, ui ) {
        // $( "#slider-handle" ).text( ui.value )
      },
    } ),
    dom : $( "#animation-bar" ).ready( () => {
      // context.events.subscribe( "animation.play", action => {
      //   console.log( "Clip detected: " + action )
      //   console.log( action.getClip().tracks )
      // } )
      context.animationBar.onFrame()
    } ),
    addEvent() {
      const TRACK_NAME = "animateur.eventPosition"
      const t = context.viewport.mixer.currentAction.time
      const v = new THREE.Vector3(t,t,t)
      const tracks = context.viewport.mixer.currentAction.getClip().tracks
      let newFrame = new THREE.VectorKeyframeTrack( TRACK_NAME, [t], [ v.x, v.y, v.z ], THREE.InterpolateDiscrete )
      let track = tracks.find( track => track.name === TRACK_NAME )
      if ( ! track ) {
        track = newFrame
        tracks.push( track )
      } else {
        let times = new Float32Array( track.times.length + 1 )
        times.set( track.times )
        times.set( newFrame.times, track.times.length )
        let values = new Float32Array( track.values.length + 3 )
        values.set( track.values )
        values.set( newFrame.values, track.values.length )
        track.times = times
        track.values = values
      }
      console.log( track )
    },
    onFrame() {
      const action = context.viewport.mixer.currentAction
      $( this.dom ).toggle( !!action )
      // $( ".selector" ).slider( "option", "disabled", !action )
      if ( action && action.isRunning )
      {
        $( "#slider" ).slider( "value", action.time )
        $( "#slider" ).slider( "option", "max", action.getClip().duration )
      }
      requestAnimationFrame( () => this.onFrame() )
    }
  }
}