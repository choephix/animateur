import { context } from "./main.js"
import THIS from "./animani.js"

const Animateur = {
  data : { }, /// uuid -> userdata ~
  getClipUserData( clip ) {
    let udata = this.data[ clip.name ]
    if ( ! udata )
    {
      this.data[ clip.name ] =
      udata = {
        fadeTimes : [ 0.0 , clip.duration ],
        eventTimes : [ ]
      }
    }
    return udata
  }
}

export default { 
  get data() { return Animateur.data },
  set data( value ) { Animateur.data = value },
  animationBar : {
    sliderPlay : $( "#play-slider" ).slider({
      orientation: "horizontal",
      range: "min",
      step: .001,
      slide: function( event, ui ) {
        context.viewport.mixer.currentAction.paused = true
        context.viewport.mixer.currentAction.time = ui.value
      },
    } ),
    sliderWeight : $( "#weight-slider" ).slider( {
      orientation: "horizontal",
      range: true,
      min: 0.0,
      max: 10.0,
      step: .001,
      values: [ 0.000, 1.000 ],
      slide: function( event, ui ) {
        context.viewport.mixer.currentAction.paused = true
        context.viewport.mixer.currentAction.time = ui.value
      },
    } ),
    sliderEvents : $( "#events-slider" ).slider( {
      orientation: "horizontal",
      range: false,
      min: 0.0,
      max: 10.0,
      step: .001,
      values: [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN],
      slide: function( event, ui ) {
        context.viewport.mixer.currentAction.paused = true
        context.viewport.mixer.currentAction.time = ui.value
      },
    } ),
    dom : $( "#animation-bar" ).ready( () => {
      context.events.subscribe( "animation.play", action => THIS.onAnimationPlay( action ) )
      THIS.onFrame()
      $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
        ( ui, i ) => $( ui ).text( ( i + 1 ).toString() ) )
    } ),
  },
  onFrame() {
    const action = context.viewport.mixer.currentAction
    $( this.animationBar.dom ).toggle( !! action )
    if ( action && action.isRunning ) {
      $( "#play-slider" ).slider( "value", action.time )
    }
    requestAnimationFrame( () => this.onFrame() )
  },
  onAnimationPlay( action ) 
  {
    const clip = action.getClip()
    $( ".slider" ).slider( "option", "max", clip.duration )

    const udata = Animateur.getClipUserData( clip )
    
    $( "#weight-slider" ).slider({ values : udata.fadeTimes })
    $( "#events-slider" ).slider({ values : udata.eventTimes })

    if ( udata.eventTimes.length ) {
      $( "#events-slider" ).show()
      $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
        ( ui, i ) => $( ui ).toggle( i < udata.eventTimes.length ) )
    } else {
      $( "#events-slider" ).hide()
    }
  },
  addEvent() {
    const clip = context.viewport.mixer.currentAction.getClip()
    const udata = Animateur.getClipUserData( clip )
    // name : "event_" + ( udata.eventTimes.length + 1 ),
    udata.eventTimes.push( context.viewport.mixer.currentAction.time )
    
    $( "#events-slider" ).show()
    $( "#events-slider" ).slider({ values : udata.eventTimes })
    $( "#events-slider" ).slider( "instance" ).handles.toArray().forEach( 
      ( ui, i ) => $( ui ).toggle( i < udata.eventTimes.length ) )
  },
}