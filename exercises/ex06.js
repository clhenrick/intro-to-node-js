/* ex06.js */
var fs = require('fs');
var path = require('path');

function filterFiles(dir, filter, callback) {
  //  can also use a regular expression to create the .fileExtension
  var extFilter = new RegExp('\\.' + filter + '$');
  // result will be our array to eventually pass to our callback if all goes well
  var result = []; 
  
  fs.readdir(dir, function(err, list) {
    // check for any errors, early return our callback & pass it the error
    if (err) return callback(err); 
    
    // forEach() is a native JS function we can use in place of a for-loop. Note it is not available in older browsers
    list.forEach(function(item) {
      if (extFilter.test(item)) {
        // we use the push method for adding things to arrays
        result.push(item);
      }
    });

    // finally call our callback function with null as a first argument
    callback(null, result); 
  });
}

module.exports = filterFiles;

// actual solution:
    // var fs = require('fs')
    // var path = require('path')
    
    // module.exports = function (dir, filterStr, callback) {
    
    //   fs.readdir(dir, function (err, list) {
    //     if (err)
    //       return callback(err)
    
    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })
    
    //     callback(null, list)
    //   })
    // }