import { Injectable } from '@angular/core'
import * as THREE from "three"

export enum Events { 
  CHANGE_DATA = "change.data",
  CHANGE_SELECTION = "change.selection",
  CHANGE_CHARACTER = "change.character",
  ANIMATION_PLAY = "animation.play",
  ADD_CHARACTER = "add.character",
}

@Injectable({ providedIn: 'root' })
export class MainService
{
  initialize() {
    context.time.clock.start()
    
    this.onFrame()
    
    context.events.subscribe( Events.CHANGE_DATA, (...a) => console.info( "CHANGE_DATA", ...a ) )
    context.events.subscribe( Events.CHANGE_SELECTION, (...a) => console.info( "CHANGE_SELECTION", ...a ) )
    context.events.subscribe( Events.CHANGE_CHARACTER, (...a) => console.info( "CHANGE_CHARACTER", ...a ) )
    context.events.subscribe( Events.ANIMATION_PLAY, (...a) => console.info( "ANIMATION_PLAY", ...a ) )
  }
  private onFrame() {
    context.time.delta = context.time.clock.getDelta()
  
    if ( context.data.dirty ) {
      context.events.dispatch( Events.CHANGE_DATA, context.data )
      context.data.dirty = false
    }
    if ( context.selection.dirty ) {
      context.events.dispatch( Events.CHANGE_SELECTION, context.selection )
      context.selection.dirty = false
    }
    for ( let c of context.characters )
      c.aniMixer.update( context.time.delta )
    requestAnimationFrame( () => this.onFrame() )
  }

  /// /// /// /// 

  makeAndAddCharacter( model:THREE.Object3D, animations:THREE.AnimationClip[] ):Character {
    return this.addCharacter( new Character( model , animations ) )
  }
  addCharacter( character:Character ):Character
  {
    character.model.position.setScalar( 0 )
    character.model.traverse( o => o.visible = ! o.userData.hidden )
    context.characters.push( character )
    context.events.dispatch( Events.ADD_CHARACTER, character )
    context.data.dirty = true
    return character
  }
  
  focusOnCharacter( character:Character )
  {
    context.viewMode = context.viewMode || "overview"
    context.character = character
    context.events.dispatch( Events.CHANGE_CHARACTER, character )
    context.data.dirty = true
  }
}

export const context = 
{
  time : {
    clock : new THREE.Clock(),
    delta : 0.0,
  }, 
  
  // viewMode : null, //  "characters" , // 
  get viewMode() { return localStorage["state.viewMode"] },
  set viewMode(value) { localStorage["state.viewMode"] = value },
  
  character : <Character>null,

  characters : new Array<Character>(),

  data : new class CurrentData {
    dirty:boolean = false
  },
  
  selection : new class SelectionManager {
    all:THREE.Object3D[]|THREE.AnimationClip[]
    type:"node"|"prop"|"anim"|"mat"
    last:THREE.Object3D|THREE.AnimationClip|THREE.Material
    dirty:boolean = false
  },

  events : new class EventManager {
    functions:{ [key:string]:Function[] } = {}
    subscribe( key:Events, callback:Function ) 
    {
      if ( !this.functions[ key ] )
        this.functions[ key ] = []
      this.functions[ key ].push( callback )
    }
    dispatch( key:Events, data?:any ) {
      if ( this.functions[key] )
        for ( let callback of this.functions[key] )
          callback( data )
    }
  },

  // state : new class {
  //   data : any
  //   constructor() { this.data = localStorage[ "state" ] || {} }
  //   getValue( key:string ) { return this.data[ key ] }
  //   setValue( key:string, value:any ) {
  //     this.data[ key ] = value
  //     localStorage["state"] = JSON.stringify( this.data )
  //   }
  //   ////
  //   get viewMode():string { return this.getValue("viewMode") }
  // }
}

export class Character
{
  readonly props:PropsList
  readonly anims:AnimationsList
  readonly aniMixer:THREE.AnimationMixer
  readonly uuid:string
  
  currentAction:THREE.AnimationAction = null

  get name():string { return this.model.name || this.model.uuid }

  constructor( public model:THREE.Object3D, animations:THREE.AnimationClip[] ) 
  {
    this.props = this.findAllProps( model )
    this.anims = new AnimationsList( animations )
    this.aniMixer = new THREE.AnimationMixer( model )

    this.uuid = model.uuid

    const animationsUserData = model.userData.animationsUserData
    if ( animationsUserData )
      animations.forEach( (clip,i) => 
        this.anims.setUserData( clip, animationsUserData[ i ] ) )
  }

  makeUserData() {
    return {
      animationsUserData : 
        this.anims.toArray().map( clip => this.anims.getUserData( clip ) )
    }
  }

  findAllProps( model:THREE.Object3D )
  {
    let results:PropsList = new PropsList()

    function traverseChildren( o:THREE.Object3D ) {
      let push = false 
      let hasChildren = o.children && !! o.children.filter(c=>c.type!=="Bone").length
      push = push || ( ( o.type === "Object3D" || o.type === "Group" ) && hasChildren )
      push = push || o.type === "Mesh"
      push = push && ! o.userData.isHolster
      push = push && o !== model
  
      if ( push )
        results.add( o )
      else 
      if ( o.children )
        o.children.forEach( (child:THREE.Object3D) => traverseChildren( child ) )
    }
  
    traverseChildren( model )

    return results
  }

  /// /// ///
  
  findAllChildren( func:(child:THREE.Object3D)=>boolean ) {
    let results:THREE.Object3D[] = []
    this.model.traverse( child => func( child ) ? results.push( child ) : null )
    return results
  }

  setHidden( object:THREE.Object3D, hidden:boolean )
  {
    hidden = hidden !== undefined ? hidden : ! object.visible
    object.userData.hidden = hidden
    object.visible = ! hidden
    context.data.dirty = true
  }
  
  playDefaultAnimation() {
    let idle_anim = this.anims.find( a => a.name === "idle" ) ||
                    this.anims.find( a => a.name.toLowerCase().indexOf( "idle" ) > -1 )
    if ( idle_anim )
      this.play( idle_anim )
  }
  
  play( clip:THREE.AnimationClip ) {
    this.aniMixer.stopAllAction()
    this.aniMixer.uncacheClip( clip )
    this.currentAction = this.aniMixer.clipAction( clip )
    this.currentAction.setLoop( THREE.LoopRepeat, undefined )
    this.currentAction.enabled = true
    this.currentAction.weight = 1.0
    this.currentAction.play()

    if ( context.character === this )
      context.events.dispatch( Events.ANIMATION_PLAY, this.currentAction )
  }
}

export class UniqueItemsList<T> extends Set<T>
{
  get length():number { return this.size }

  getByUuid( uuid:string ) { 
    for ( let item of this )
      if ( (<any>item).uuid === uuid )
        return item
    return null
  }

  map( func:Function ) { 
    return Array.from(this).map( (v,i,a)=>func(v,i,a) )
  }

  find( func:(o:T)=>boolean ) { 
    for ( let item of this )
      if ( func( item ) )
        return item
    return null
  }

  addAll( ...items:T[] ):void {
    items.forEach( item => this.add( item ) )
  }

  add( item:T) {
    context.data.dirty = true
    return super.add( item )
  }

  deleteAll( ...props:T[] ):void {
    props.forEach( item => this.delete( item ) )
  }

  delete( item:T ):boolean {
    context.data.dirty = true
    return super.delete( item )
  }

  toArray():T[] { return Array.from( this ) }
}

class AnimationUserData
{
  fadeTimes:[number,number]
  eventTimes:number[]
  // get events():{time:number}[] { return this.eventTimes.map( time => { return { time : time } } ) }
  // events:{time:number}[]
  constructor( clip:THREE.AnimationClip, data?:any ) {
    this.fadeTimes = [ 0.0 , clip.duration ]
    this.eventTimes = [ ]

    if ( data ) {
      this.fadeTimes[ 0 ] = data.fadeTimes[ 0 ]
      this.fadeTimes[ 1 ] = data.fadeTimes[ 1 ]
      this.eventTimes.push( ...data.eventTimes )
    }

    // this.events = [ ]
  }
  addEvent( time:number ) {
    this.eventTimes.push( time )
    this.eventTimes.sort()
    // this.events.push( { time : time } )
  }
}
export class AnimationsList extends UniqueItemsList<THREE.AnimationClip>
{
  userDatas:{ [uuid:string] : AnimationUserData } = {}

  getUserData( clip:THREE.AnimationClip ):AnimationUserData {
    if ( this.userDatas[ clip.uuid ] === undefined ) {
      this.userDatas[ clip.uuid ] = new AnimationUserData( clip )
    }
    return this.userDatas[ clip.uuid ]
  }
  setUserData( clip:THREE.AnimationClip, data:any ):void {
    this.userDatas[ clip.uuid ] = new AnimationUserData( clip, data )
  }

  add( item:THREE.AnimationClip ) {
    let i = 0, originalName = item.name
    while ( this.find( a => a.name === item.name ) )
      item.name = `${originalName}-${++i}`
    return super.add( item )
  }

  duplicate( clip:THREE.AnimationClip ):THREE.AnimationClip {
    /// @ts-ignore
    let clone = clip.clone()
    this.add( clone )
    return clone
  }
}

export class PropsList extends UniqueItemsList<THREE.Object3D>
{
  duplicate( prop:THREE.Object3D ):THREE.Object3D {
    let clone = prop.clone()
    prop.parent.add( clone )
    this.add( clone )
    return clone
  }

  delete( prop:THREE.Object3D ):boolean {
    prop.parent.remove( prop )
    return super.delete( prop )
  }
}