// ex12.js
var http = require('http');
var map = require('through2-map'); // requires doing npm install through2-map
var port = Number(process.argv[2]);

var server = http.createServer(function(req, res) {
  // if the client's request is not a POST then do an early return
  if (req.method != 'POST')
    return res.end();

  // other wise pipe the request to the through2-map module
  req.pipe(map(function(chunk){
    
    // and return each chunk as an upper case text
    return chunk.toString().toUpperCase();

  // lastly pipe it to the response to the client
  })).pipe(res);

});

server.listen(port);