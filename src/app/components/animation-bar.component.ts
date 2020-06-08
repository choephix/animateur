import { Component, OnInit, ViewChild } from '@angular/core'
import { context, Events } from '../services/main.service'
import { NouisliderModule, NouisliderComponent } from 'ng2-nouislider'
import * as THREE from "three"
import * as $ from 'jquery'

const FRAME_TIME = 1.000 / 30

@Component({
  selector: 'app-animation-bar',
  templateUrl: './animation-bar.component.html',
  styleUrls: ['./animation-bar.component.css']
})
export class AnimationBarComponent implements OnInit
{
  @ViewChild( NouisliderComponent, {static:true} )
  slider_events:NouisliderComponent

  sliderConfig = {
    events : {
      step: FRAME_TIME,
      connect: false,
      animate: false,
      behaviour: 'unconstrained-tap-snap',
      // tooltips: true,
      tooltips: [
        { to : () => "1" } ,
        { to : () => "2" } ,
        { to : () => "3" } ,
        { to : () => "4" } ,
        { to : () => "5" } ,
        { to : () => "6" } ,
        { to : () => "7" } ,
        { to : () => "8" } ,
        { to : () => "9" } ,
        { to : () => "10" } ,
      ]
    } ,
    weight : {
      step: FRAME_TIME,
      margin: FRAME_TIME,
      connect: [true,false,true],
      animate: false,
      behaviour: 'snap',
    } ,
    play : {
      step: .001,
      connect: [true,false],
      animate: false,
      behaviour: 'snap',
      // pips: {
        // mode: 'steps',
        // filter: t => t % 1.000 ? -1 : 0,
        // format: t => (<number>t).toPrecision(1)
        // density: 1,
      // }
    }
  }
  
  action = {
    get clip():THREE.AnimationClip { 
      if ( ! context.character || ! context.character.currentAction )
        return null
      return context.character.currentAction.getClip()
    } ,
    get userData() { 
      if ( ! this.clip )
        return null
      return context.character.anims.getUserData( this.clip )
    } ,

    get duration():number { 
      if ( ! context.character || ! context.character.currentAction )
        return 1.000
      return this.clip.duration
    } ,
    get hasEvents():boolean {
      return !! context.character && 
             !! context.character.currentAction &&
             !! this.userData.eventTimes.length
    } ,

    // _events : [.1,.2,.3,.4,.5,.6,.7,.8,.9,1.0] ,
    events : [11,12,13,14,15,16,17,18,19,20] ,

    get weight():number[] { 
      if ( ! context.character || ! context.character.currentAction )
        return [ 0.000, 0.000 ]
      const clip = context.character.currentAction.getClip()
      return context.character.anims.getUserData( clip ).fadeTimes
    } ,
    set weight( v:number[] ) { 
      const clip = context.character.currentAction.getClip()
      const fadeTimes = context.character.anims.getUserData( clip ).fadeTimes
      fadeTimes[ 0 ] = v[ 0 ]
      fadeTimes[ 1 ] = v[ 1 ]
    } ,

    get time():number { 
      if ( ! context.character || ! context.character.currentAction )
        return 0.000
      return context.character.currentAction.time
    } ,
    set time(v:number) { 
      if ( ! context.character || ! context.character.currentAction )
        return
      // console.log( v )
      // context.character.currentAction.paused = true
      // context.character.currentAction.time = v
    }
  }

  context = context

  handlers = {
    change_play( value:number ) { 
      // console.log( value )
      context.character.currentAction.paused = true
      context.character.currentAction.time = value
    } ,
    change_events( values:number[] ) {
      const clip = context.character.currentAction.getClip()
      const eventTimes = context.character.anims.getUserData( clip ).eventTimes
      eventTimes.forEach( ( t, i ) => eventTimes[ i ] = values[ i ] )
    }
  }

  constructor() { }

  ngOnInit() 
  {
    ///@ts-ignore
    window.ani = this
    context.events.subscribe( Events.CHANGE_SELECTION, selection => {
      if ( selection.type === "anim" ) {
        context.character.play( selection.last as THREE.AnimationClip )
      }
    } )

    /// @ts-ignore
    $.contextMenu( {
      selector: 'div.sliders',
      animation: {duration: 100, show: 'fadeIn', hide: 'fadeOut'},
      items: [
        { name : "Add Event", icon: "star", callback : () => this.addEvent() } , 
        { name : "Create animation from first frame", icon: "flash", callback : () => {
          /// @ts-ignore
          let a = this.action.clip.clone()
          a.tracks.forEach( t => { 
            t.times = [ 0 ]
            t.values = t.values.slice( 0, t.name.endsWith(".quaternion") ? 4 : 3 ) 
          } )
          a.name += "-start-pose"
          a.duration = 0.000
          context.character.anims.add( a )
        } } , 
        { name : "Create animation from first frame", icon: "flash", callback : () => {
          /// @ts-ignore
          let a = this.action.clip.clone()
          a.tracks.forEach( t => { 
            t.times = [ 0 ]
            t.values = t.values.slice( t.values.length - ( t.name.endsWith(".quaternion") ? 4 : 3 ) )
          } )
          a.name += "-end-pose"
          a.duration = 0.000
          context.character.anims.add( a )
        } } , 
      ]
    } )

    // this.slider_events.slide.subscribe( (...rest) => console.log(rest) )
    // this.slider_events.slider.on( "slide", (...rest) => console.log(rest) )
    // $("#slider-events").on("change",(...rest) => console.log(rest))

    context.events.subscribe( Events.ANIMATION_PLAY, () => this.refresh() )
    context.events.subscribe( Events.CHANGE_CHARACTER, () => this.refresh() )
    if ( context.character && context.character.currentAction )
      this.refresh() 
    
    this.onFrame()
  }

  onFrame() {

    try {
      const action = context.character.currentAction
      const clip = action.getClip()
      const udata = context.character.anims.getUserData( clip )
      udata.eventTimes.forEach( ( et, i ) => this.action.events[ i ] = et )
      const handles = $("#slider-events .noUi-handle").toArray()
      handles.forEach( ( o, i ) => $(o).toggle( udata.eventTimes[ i ] !== undefined ) )
    } catch( e ) { }

    requestAnimationFrame( () => this.onFrame() )
  }

  refresh() 
  {
    const action = context.character.currentAction
    const clip = action.getClip()
    const udata = context.character.anims.getUserData( clip )
    udata.eventTimes.forEach( ( et, i ) => this.action.events[ i ] = et )

    ///@ts-ignore
    this.slider_events.writeValue( this.action.events )

    console.log( udata )
  }

  ////

  togglePause() {
    context.character.currentAction.paused = ! context.character.currentAction.paused
  }
  
  addEvent() {
    const clip = context.character.currentAction.getClip()
    const udata = context.character.anims.getUserData( clip )
    udata.addEvent( context.character.currentAction.time )
    
    this.refresh() 
  }
}
