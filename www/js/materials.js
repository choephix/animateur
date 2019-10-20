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
  .on( 'change', c => setColor( c ) )
  .on( 'save', c => addSwatch( c ) )
}

function setColor( c ) {
  let hex = c.toHEXA().toString()
  context.selection.all
    .map( uuid => util.getByUuid(uuid) )
    .forEach( o => {
      // console.log( o )
      if ( o.matrixWorld === undefined ) return
      setColorTo( o, hex )
    } )
}

function setColorTo( object, hex )
{
  object.traverse( child => {
    if ( child.material ) 
      child.material.color = new THREE.Color( hex )
  } )
}

// context.events.subscribe( "change.selection", () => {
//   if ( context.selection.last )
//     if ( context.selection.last.matrixWorld !== undefined )
//       context.selection.last.traverse( child => {
//         if ( child.material ) 
//           pickr.setColor( child.material.color.getHexString() )
//       } )
// } )

export default { pickr , addSwatch }