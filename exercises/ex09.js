// ex09.js
var http = require('http');
var urls = [ process.argv[2], process.argv[3], process.argv[4] ];
var count = 0;
allTheData = {}; // store each url's data in an object

urls.forEach(function(url) {
  var dataStore = [];  
  
  http.get(url, function(res) {    
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      dataStore.push(chunk);
    });
    // end is where we finally output our data
    res.on('end', function() {
      var fin = dataStore.join('');      
      count += 1;
      allTheData[url] = fin;
    
      if (count === 3) {
        for (var i = 0; i < urls.length; i ++) {
          console.log(allTheData[urls[i]]);
        }
      }

    });
  }).on('error', function(e) {
    console.error(e);
  });  // end http.get()

}); // end forEach

// actual answer:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(data)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)