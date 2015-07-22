var mymodule = require('./ex06.js');
var dir = process.argv[2];
var ext = process.argv[3];

// invoke / call mymodule with the input director, file extension to filter, and callback function
mymodule(dir, ext, function(err, data){
  if (err) {
    console.error('there was an error: ', err); // prepending a string 
   } 

  data.forEach(function(item) {
    console.log(item);
  });
});

// actual solution:
    // var filterFn = require('./solution_filter.js')
    // var dir = process.argv[2]
    // var filterStr = process.argv[3]
    
    // filterFn(dir, filterStr, function (err, list) {
    //   if (err)
    //     return console.error('There was an error:', err)
    
    //   list.forEach(function (file) {
    //     console.log(file)
    //   })
    // })