// ex07.js
// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. 
// Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http');
var url = process.argv[2];

// console.log(process.argv);

http.get(url, function(res) {
  // the response signature has special methods associated with it
  res.setEncoding('utf8');
  res.on('error', function(err) {
    console.log('res error: ', err);
  })
  res.on('data', function(data) {
    console.log(data);
  });
}).on('error', function(e){
  console.log('GET request error: ', e);
});

// actual answer:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })