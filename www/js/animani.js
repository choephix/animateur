import { context } from "./main.js"
// import util from "./util.js"
import THIS from "./animani.js"

const __ = {
  KeyFrame : class {
  },
  KeyFrameTrack : class {
    name = "untitled"
    frames = []
  },
}

const TRACK_NAME_WEIGTH = "animateur.clipWeight"
const TRACK_NAME_EVENTS = "animateur.clipEvents"

const findTrack = ( clip, name ) => clip.tracks.find( o => o.name === name )
const reusable = {
  weight : [ 0.000, 1.000 ],
  events : [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN],
}

export default { 
  animationBar : {
    sliderPlay : $( "#play-slider" ).slider({
      orientation: "horizontal",
      range: "min",
      step: .001,
      slide: function( event, ui ) {
        context.viewport.mixer.currentAction.paused = true
        context.viewport.mixer.currentAction.time = ui.value
        // const clip = context.viewport.mixer.currentAction.getClip()
        // console.log( ui )
      },
    } ),
    sliderWeight : $( "#weight-slider" ).slider( {
      orientation: "horizontal",
      range: true,
      min: 0.0,
      max: 10.0,
      step: .001,
      values: reusable.weight,
      slide: function( event, ui ) {
        const clip = context.viewport.mixer.currentAction.getClip()
        findTrack( clip, TRACK_NAME_WEIGTH ).times[ 1 ] = reusable.weight[ 0 ]
        findTrack( clip, TRACK_NAME_WEIGTH ).times[ 2 ] = reusable.weight[ 1 ]
      },
    } ),
    sliderEvents : $( "#events-slider" ).slider( {
      orientation: "horizontal",
      range: false,
      min: 0.0,
      max: 10.0,
      step: .001,
      values: reusable.events
    } ),

    dom : $( "#animation-bar" ).ready( () => {
      context.events.subscribe( "animation.play", action => THIS.animationBar.onAnimationPlay( action ) )
      context.animationBar.onFrame()
      $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
        ( ui, i ) => $( ui ).text( ( i + 1 ).toString() ) )
    } ),
    onAnimationPlay( action ) 
    {
      context.data.model["clipWeight"] = 0.0
      context.data.model["clipEvents"] = ''

      const clip = action.getClip()
      $( ".slider" ).slider( "option", "max", clip.duration )

      let track_weight = findTrack( clip, TRACK_NAME_WEIGTH )
      if ( ! track_weight ) {
        track_weight = new THREE.NumberKeyframeTrack( TRACK_NAME_WEIGTH, 
                           [ 0.000, 0.250, 0.750, clip.duration ], [ 0.0, 1.0, 1.0, 0.0 ] )
        clip.tracks.push( track_weight )
      }
      reusable.weight[ 0 ] = 0.1
      reusable.weight[ 1 ] = clip.duration - 0.1
      $( "#weight-slider" ).slider({ values : reusable.weight })

      let track_events = findTrack( clip, TRACK_NAME_EVENTS )
      if ( track_events ) {
        $( "#events-slider" ).slider({ values : track_events.times })
        $( "#events-slider" ).show()
        $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
          ( ui, i ) => $( ui ).toggle( i < track_events.times.length ) )
      } else {
        $( "#events-slider" ).hide()
      }
    },
    addEvent() {
      const clip = context.viewport.mixer.currentAction.getClip()
      const time = context.viewport.mixer.currentAction.time
      
      const makeName = ( i ) => "event_" + i

      let track = findTrack( clip, TRACK_NAME_EVENTS )
      
      if ( ! track ) {
        track = new THREE.StringKeyframeTrack( TRACK_NAME_EVENTS, 
                [ time ], [ makeName( 1 ) ], THREE.InterpolateDiscrete )
        clip.tracks.push( track )
      } else {
        const times = new Float32Array( track.times.length + 1 )
        times.set( track.times )
        times.set( [ time ], track.times.length )  
        track.times = times
        track.values.push( makeName( times.length ) )
      }
      
      $( "#events-slider" ).show()
      $( "#events-slider" ).slider({ values : track.times })

      $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
        ( ui, i ) => $( ui ).toggle( i < track.times.length ) )
    },
    onFrame() {
      const action = context.viewport.mixer.currentAction
      $( this.dom ).toggle( !! action )
      // $( ".selector" ).slider( "option", "disabled", !action )

      if ( action && action.isRunning ) {
        $( "#play-slider" ).slider( "value", action.time )
      }

      // $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
      //   ( ui, i ) => $( ui ).toggle( ! isNaN( ui.value ) ) )

      requestAnimationFrame( () => this.onFrame() )
    }
  }
}