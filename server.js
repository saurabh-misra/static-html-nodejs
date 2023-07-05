const express = require( "express" ),
  app = express(),
  path = require( "path" ),
  PORT = 3000;

app.get( "/", ( req, res ) => {
  res.send();
});

// Start the API server!
app.listen( PORT, () => console.log( `👂 API server listening on port ${ PORT }` ) );