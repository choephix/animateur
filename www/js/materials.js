import { context } from "./main.js"
import util from "./util.js"

const swatches = []
const pickr = createPickr( 'button.pick-color' )

function addSwatch( color ) 
{
  let hex = typeof color === "string" ? 
            color : color.toHEXA().toString()
  if ( swatches.indexOf( hex ) > -1 )
    return
  swatches.push( hex )
  pickr.addSwatch( hex )
  // console.log( swatches )
}

function createPickr( element ) {
  return Pickr.create( {
    el: element,
    theme: 'nano',
    swatches: swatches,
    comparison: false,
    components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: { input: true, save: true }
    }
  } )
  .on( 'change', ( c, inst ) => { if ( inst.isOpen() ) setColor( c ) } )
  .on( 'save', c => addSwatch( c ) )
}

function setColor( c ) {
  let hex = c.toHEXA().toString()
  context.selection.all
    .map( uuid => util.getByUuid(uuid) )
    .forEach( o => {
      if ( ! o ) return
      if ( o.matrixWorld === undefined ) return
      setColorTo( o, hex )
    } )
}

function setColorTo( object, hex )
{
  util.findAll( object, child => !!child.material )
      .forEach( child => child.material.color = new THREE.Color( hex ) )
}

function initialize(){
  context.events.subscribe( "change.selection", () => {
    if ( ! context.selection.last ) return
    if ( ! context.selection.last.matrixWorld === undefined ) return
    let color = null
    context.selection.last.traverse( child => {
      if ( ! color && child.material ) 
        color = child.material.color.getHexString()
    } )
    pickr.setColor( color, true )
  } )
}

export default { initialize, pickr , addSwatch }