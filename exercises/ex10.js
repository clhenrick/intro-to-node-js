// ex10.js
var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket){
  var time = strftime('%Y-%m-%d %H:%M');
  socket.end(time + '\n');
});

server.listen(port);

// the official answer, doesn't use a 3rd party module:
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))