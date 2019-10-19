import { context } from "./main.js"

const swatches = []

export default {
  colors : [ 0xBBBBBB, 0x111111 ],
  pickr_a : Pickr.create({
    el: 'button.pick-color-1',
    comparison: false,
    theme: 'nano',
    swatches: swatches,
    components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: { input: true, save: true }
    }
  })
  .on( 'change', c => setColor( 1, c.toHEXA().toString() ) )
  .on( 'save', (c,p) => p.addSwatch( c.toHEXA().toString() ) )
  ,
  pickr_b : Pickr.create({
    el: 'button.pick-color-2',
    comparison: false,
    theme: 'nano',
    swatches: swatches,
    components: {
        preview: true,
        opacity: false,
        hue: true,
        interaction: { input: true, save: true }
    }
  })
  .on( 'change', c => setColor( 2, c.toHEXA().toString() ) )
  .on( 'save', (c,p) => p.addSwatch( c.toHEXA().toString() ) )
  ,
}

function setColor( i, hex ) {
  context.data.model.children[ i ].material.color = new THREE.Color( hex )
  context.data.model.children[ i ].material.needsUpdate = true
}