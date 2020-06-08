import { Component, OnInit, ElementRef, HostListener } from '@angular/core'
import * as THREE from "three"
import * as $ from 'jquery'
import { LoadorService } from '../services/loador.service'
import { SceneService } from '../services/scener.service'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { context, Events } from '../services/main.service'
import { ExportorService } from '../services/exportor.service';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
})
export class ViewportComponent implements OnInit 
{
  context = context

  renderer:THREE.WebGLRenderer
  orbit:OrbitControls
  transformer:TransformControls
  camera:THREE.PerspectiveCamera

  constructor( private viewportElem:ElementRef, 
               private scener:SceneService, 
               private loador:LoadorService,
               private exportor:ExportorService ) {}

  ngOnInit() 
  {
    const canvasElem = document.getElementById( "webgl-canvas" ) as HTMLCanvasElement 
    this.renderer = new THREE.WebGLRenderer( { canvas: canvasElem, antialias: true } )
    this.scener.initialize()

    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )
    this.camera.position.z = 3
    this.camera.position.y = 2
    this.camera.lookAt( new THREE.Vector3() )

    this.orbit = new OrbitControls( this.camera, canvasElem )
    this.orbit.target = new THREE.Vector3( 0, 1, 0 )
    this.orbit.update()
    this.orbit.mouseButtons.LEFT = 0
    this.orbit.mouseButtons.RIGHT = 2
    this.orbit.mouseButtons.MIDDLE = -1
    this.orbit.enableKeys = false

    this.transformer = new TransformControls( this.camera, canvasElem )
    this.transformer.addEventListener( 'dragging-changed', event => this.orbit.enabled = ! event.value )
    this.transformer.setSize( 0.5 )
    this.transformer.setSpace( "local" )
    this.scener.scene.add( this.transformer )

    context.events.subscribe( Events.CHANGE_CHARACTER, character => {
      this.scener.rig.position.x = 
      this.camera.position.x = 
      this.orbit.target.x = this.scener.platforms[ character.uuid ].position.x
      this.orbit.update()
      this.transformer.detach()
    } )

    context.events.subscribe( Events.CHANGE_DATA, data => {
      if ( this.transformer.object && ! this.transformer.object.parent )
        this.transformer.detach()
    } )

    context.events.subscribe( Events.CHANGE_SELECTION, selection => {
      if ( selection.type === "node" || selection.type === "prop" )
        this.transformer.attach( selection.last as THREE.Object3D )
      else
        this.transformer.detach()
    } )
    
    $( "button.transform.position" ).click( e => this.transformer.setMode( "translate" ) )
    $( "button.transform.rotation" ).click( e => this.transformer.setMode( "rotate" ) )
    $( "button.transform.scale" ).click( e => this.transformer.setMode( "scale" ) )
    $( "button.transform.space" ).click( e => this.transformer.setSpace( 
                                              this.transformer.space === "world" ? "local" : "world" ) )

    this.onResize()
    this.animate()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let [ W, H ] = [ this.viewportElem.nativeElement.clientWidth, this.viewportElem.nativeElement.clientHeight ]
    this.renderer.setSize( W, H )
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
  }

  animate()
  {
    this.renderer.render( this.scener.scene, this.camera )
    requestAnimationFrame( () => this.animate() )
  }
}