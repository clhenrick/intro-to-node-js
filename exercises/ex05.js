// ex05.js
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filterExt = '.' + process.argv[3];

// console.log(process.argv);

fs.readdir(dir, function(err,list) {
  if (err) throw err;
  for (var i = 0; i < list.length; i++) {
    var fileExt = path.extname(list[i]);
    if (fileExt === filterExt) {
      console.log(list[i]);
    }    
  }
});

// actual answer:
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
