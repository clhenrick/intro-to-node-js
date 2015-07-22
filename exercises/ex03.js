var fs = require('fs');
var argv = process.argv;
var numLines = 0;
var fileBuffer = fs.readFileSync(argv[2]);

var text = fileBuffer.toString();
var split = text.split('\n');
numLines = split.length - 1;

console.log(numLines);

// actual answer:
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)