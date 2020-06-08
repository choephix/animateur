import { Injectable } from '@angular/core'
import * as THREE from "three"
import { context, Events, Character } from '../services/main.service'

const DEFAULT_RIG = 2 /// 0 1 2

const textureLoader = new THREE.TextureLoader()

export const studioRigConfigurations = [
  {
    name : "default",
    colors : {
      background : 0x224477,
      grid_a : 0x99CCFF,
      grid_b : 0x4466CC,
    } ,
    lights : {
      ambient : [
        { color : 0xffffff, intensity : .60 } 
      ] ,
      directional : [
        { color : 0xffffff, intensity : .50, position : [-1, 0, 0 ] } ,
        { color : 0xffffff, intensity : .75, position : [ 1, 1, 1 ] } ,
        { color : 0xffffff, intensity : .50, position : [ 0, 0,-1 ] } ,
      ] ,
    } ,
  } ,
  {
    name : "in-gamish",
    colors : {
      background : 0x3a7f41,
      grid_a : 0xFFFF41,
      grid_b : 0x5a9f61,
    } ,
    lights : {
      ambient : [
        { color : 0xffffff, intensity : 0.70 }
      ] ,
      directional : [
        { color : 0xffffff, intensity : .40, position : [-1, 0,-1 ] } ,
        { color : 0xffffff, intensity : .70, position : [ 1, 1, 1 ] } ,
      ] ,
    } ,
  } ,
  {
    name : "dark",
    colors : {
      background : 0x1A1A1A,
      grid_a : 0x404040,
      grid_b : 0x303030,
    } ,
    lights : {
      ambient : [
        { color : 0xffffff, intensity : .50 } 
      ] ,
      directional : [
        { color : 0xffffff, intensity : .50, position : [-1, 0, 0 ] } ,
        { color : 0xffffff, intensity : .75, position : [ 1, 1, 1 ] } ,
        { color : 0xffffff, intensity : .50, position : [ 0, 0,-1 ] } ,
      ] ,
    } ,
  } ,
]

@Injectable({ providedIn: 'root' })
export class SceneService
{
  scene = new THREE.Scene()
  rig = new StudioRig()
  rigConfigurations = studioRigConfigurations

  platforms:{[character_uuid:string]:THREE.Group} = {}

  isLoading:boolean = true //// directly use loader.busy

  initialize() 
  {
    this.scene.add( this.rig )
    this.rig.initialize( studioRigConfigurations[ DEFAULT_RIG ], this.scene )

    context.events.subscribe( Events.ADD_CHARACTER, (character:Character) => {
      let platform = this.platforms[ character.uuid ] = new THREE.Group()
      platform.add( character.model )
      platform.position.x = context.characters.length - 1
      this.scene.add( platform )
    } )

    this.isLoading = false
  }

  setupRig( config ) {
    this.rig.initialize( config, this.scene )
  }
}

class StudioRig extends THREE.Group
{
  configuration
  grid:THREE.GridHelper
  envMap:THREE.Texture

  initialize( configuration, scene:THREE.Scene ) {
    this.configuration = configuration

    while( this.children.length > 0 )
      this.remove( this.children[ 0 ] )

    scene.background = new THREE.Color( configuration.colors.background )

    configuration.lights.ambient.forEach( ( c, i ) => {
      let light = new THREE.AmbientLight( c.color, c.intensity )
      light.name = "Light (ambient) " + i
      this.add( light )
    } )

    configuration.lights.directional.forEach( ( c, i ) => {
      let light = new THREE.DirectionalLight( c.color, c.intensity )
      light.position.set( c.position[0], c.position[1], c.position[2] ).setLength(20)
      light.lookAt( new THREE.Vector3( 0,0,0 ) )
      light.name = "Light (directional) " + i
      this.add( light )
    } )

    this.grid = new THREE.GridHelper( 20, 20, 
                    configuration.colors.grid_a, 
                    configuration.colors.grid_b )
    this.add( this.grid )

    this.envMap = textureLoader.load( "assets/images/metal-5.png" )
    this.envMap.mapping = THREE.SphericalReflectionMapping
    this.envMap.encoding = THREE.sRGBEncoding

    // this.envMap = textureLoader.load( "assets/shitroom.jpg" )
    // this.envMap.mapping = THREE.EquirectangularReflectionMapping;
    // this.envMap.magFilter = THREE.LinearFilter;
    // this.envMap.minFilter = THREE.LinearMipmapLinearFilter;
    // this.envMap.encoding = THREE.sRGBEncoding
  }
}