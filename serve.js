const express = require("express")
const app = express()
const PORT = parseInt( process.argv[2] || 4333 )

const sleep = ms => new Promise( done => setTimeout( done, ms ) )

app.use( express.static( 'www' ) )
app.use( express.json( { extended: true } ) )
app.post('/api/save', ( req, res ) => {
  console.log( req.url, req.body, '\n' )
  return res.json({ok:true}).end()
})

server = app.listen( PORT, () => onServerStarted() )

function onServerStarted() {
  console.log("\x1b[94m» Server started at port \x1b[93;1m%s\x1b[0m", server.address().port) 
}