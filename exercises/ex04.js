// ex04.js

var fs = require('fs');
var argv = process.argv;
var numLines = 0;

fs.readFile(argv[2], function(err, data) {
  if (err) throw err;
  var text = data.toString();
  var split = text.split('\n');
  numLines = split.length - 1;
  console.log(numLines); // try putting this at the bottom of the script outside the function to explain asynchronousity
});

// actual answer:
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })