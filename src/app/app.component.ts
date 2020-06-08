import { Component } from '@angular/core'
import { LoadorService } from './services/loador.service'
import { SceneService } from './services/scener.service'
import { context, MainService, Character } from './services/main.service'
import Stats from "stats-js"

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  context = context
  
  constructor( private main:MainService, private loador:LoadorService, private scener:SceneService ) { }
  ngOnInit() 
  {
    this.main.initialize()
    this.scener.initialize()

    this.loador.makeDropField( 'viewport', this.loador.fileResolvers.characters, 
                               ( ...rest:any ) => this.onCharactersLoaded( ...rest ) )
    ///
    
    // new DropField( document.getElementById('subpanel-nodes') ).resolver( fileResolvers.model ).loaded( onCharacterLoaded )
    // new DropField( document.getElementById('subpanel-props') ).resolver( fileResolvers.props ).loaded( onPropLoaded )
    // new DropField( document.getElementById('subpanel-anims') ).resolver( fileResolvers.anims ).loaded( onAnimationsLoaded )
    
    this.loador.loadZipFromLocalStorage( ( ...rest:any ) => this.onCharactersLoaded( ...rest ) )
    
    var stats = new Stats()
    stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
		stats.dom.style.setProperty("left", "unset")
		stats.dom.style.setProperty("right", "48px")
    document.body.appendChild( stats.dom )
    function animate() {
      stats.end()
      stats.begin()
      requestAnimationFrame( animate )
    }
    requestAnimationFrame( animate )

    /// @ts-ignore
    window.app = this ; window.context = context
  }

  onCharactersLoaded( ...characters:Character[] ) 
  {
    characters.forEach( character => {
      console.log( character )
      this.main.addCharacter( character )
      character.playDefaultAnimation()
      // this.extractColors( character.model )
    } )
    this.main.focusOnCharacter( characters[0] )
  }
  
}

/////// EXTENSIONS //////

declare global { interface Array<T> {
  toSet<T>():Set<T>
  mapToObject<T>( func:(o:T,i?:number) => string | [string,any] ):{[key:string]:any}
} }
Array.prototype.toSet = function<T>():Set<T> { return new Set( this ) }
Array.prototype.mapToObject = function<T>( func:(o:T,i?:number) => string | [string,T] ):{[key:string]:T} {
  const result = {}
  this.forEach( ( o:T, i:number ) => {
    let r = func( o, i )
    let [ key, value ] = Array.isArray( r ) ? [ r[0], r[1] ] : [ r, o ]
    result[ key ] = value
  } )
  return result
}