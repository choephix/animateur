import { context } from "./main.js"

const swatches = []
const pickr = createPickr( 'button.pick-color' )

function addSwatch( color ) 
{
  let hex = typeof color === "string" ? 
            color : color.toHEXA().toString()
  if ( swatches.indexOf( hex ) < -1 )
    return
  swatches.push( hex )
  pickr.addSwatch( hex )
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
  if ( context.selection.last )
    if ( context.selection.last.matrixWorld !== undefined )
      setColorTo( context.selection.last, hex )
}

function setColorTo( object, hex )
{
  object.traverse( child => {
    if ( child.material ) 
      child.material.color = new THREE.Color( hex )
  } )
}

export default { pickr , addSwatch }