// ex11.js
// create an http server that on success sends the contents of a file to the client

var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(req, res) {
  // tell the client what type of data we have on success
  res.writeHead(200, {"Content-Type" : "text/html"});

  // create a readable stream and pipe it to response
  fs.createReadStream(file).pipe(res);  
  
});

server.listen(port);