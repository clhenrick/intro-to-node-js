# Learn You Node notes
Notes on Node School's [Learn You Node command line tutorial](https://github.com/workshopper/learnyounode) for teaching a summer workshop to the incoming Parsons School of Design M.S. Data-Viz class.

## General Thoughts:
- This tutorial will likely also serve as a javascript review to students new to coding so things will need to be taken slowly and explained carefully.
- Cover how to run node interactively on the command line and mess around, similar to how one would with the javascript console in developer tools in a web browser.
- Explain best practices for where to look when Googling things. eg: "mdn regular expressions"

## Notes on Exercises:
### Exercise 1: Hello World
- write “Hello World!” to the console
- covers basic approach of creating a file and running it using Node
- exercise only verifies if you have console.log(“HELLO WORLD”); your output must match exactly!

### Exercise 2: Making a program to sum #’s
- covers argv, looping, starting a loop at a number > 0

### Exercise 3: Synchronous I/O
- Synchronous vs. Asynchronous operations in Javascript
  - explain why this is important & when you might need to use it both in a browser & with Node (have a good latter example?)

- importing modules 
  - (explain core / built-in modules vs. 3rd party modules)

- reading documentation
  - learning how to look up the readFile doc in the browser
  - go over how to read code documentation

- naming of variables
  - what good conventions to follow are in JS & programming in general

- using method chaining, ie: you could combine all those methods on one line

### Exercise 4: Asynchronous I/O
- I/O callbacks in JS, 
  - Max Ogden’s fast-food analogy for callbacks is a good one: https://github.com/maxogden/art-of-node#callbacks
  - error handling
  - doing your next task only after the first task is completed and all has gone well. 

### Exercise 5: Filtering a List
- reading files in a directory
- filtering files by an extension
- concatenating strings, eg: `‘.’ + argv.process[3];`
- briefly describe if statements & boolean logic
  - [LPTHW has a good explanation](http://learnpythonthehardway.org/book/ex27.html#the-truth-tables)
- this time our anonymous function takes two parameters: error & data. 
  - Ask students why
- if no error than the first is null & data is a list of files in the directory
- if there’s an error we’ll do an “early return”

### Exercise 6: Making it Modular
Takes exercise 5 and turns it into a module that can be imported. Students must write 2 files.

From the documentation:  

    These four things are the contract that your module must follow:  
    * Export a single function that takes exactly the arguments described.
    * Call the callback exactly once with an error or some data as described.
    * Don't change anything else, like global variables or stdout.
    * Handle all the errors that may occur and pass them to the callback.

- we must make our previous code into a module, what is a module again?
- our module must handle errors and invoke a callback with parameters for error & data
- when we use our module we must pass it the 3 arguments: the directory to search, extension to filter, & a callback function
- the callback must take the two parameters for error and data

### Exercise 7: HTTP
Performing an HTTP GET request
- uses the http module’s built in .get() method
- simplified for http.request()
- note that the get method inherits from http in the documentation: file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_http_get_options_callback
- the callback returns a “response” object that can be acted on:
  - response.setEncoding(‘utf8’);  
  - response.on(‘error’, console.error);
  - response.on(‘data’, console.log);

Questions / Homework: 
 - What is `stdout`? Hint: Google "standard streams"
 - What’s encoding? Why is it important? What’s `utf8`? What are other types of encoding?
 - What are other types of HTTP requests? What would you use them for? hint: remember the "CRUD" acronym.

### Exercise 8: HTTP Collect
- Learning how to "collect" all data before acting on it.
- Can be solved either by collecting data across multiple events or by using a 3rd party module. Go over both ways?
- cover installing 3rd party modules using `npm`
- Explain the concept of "streaming" data: grabbing chunks until we have the whole thing. Then we do stuff with the data.

### Exercise 9: Juggling Async
- Task: Given three server requests that will take different amounts of time to complete, print the results of each request in the same order the urls are passed to you, without a 3rd party module.
- I used an object to keep track of the data's order, but an indexed array (used in the actual answer) is more elegant / simple.

Questions For Students:
- How do we track Asynchronous tasks?
- And then print their results in the same order that we asked for them?

### Exercise 10: Time Server
Task:  

	  Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & time in the format:

    	"YYYY-MM-DD hh:mm"

	  followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    	"2013-07-06 07:42"

- Covers creating a Node TCP server.
- Covers the Date object in Javascript.
- Have the option of using the [strftime module](https://github.com/samsonjs/strftime) to simplify working with dates.
- actual answer demonstrates how to "zero fill" numeric strings:

```
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

// this method will be easier to explain to students
function zeroFill(x) {
  if (x < 10){
    x = '0' + x;
  } 
  return x;
}
```

### Exercise 11: HTTP File Server
- create an http server
- open a connection to a port
- stream a file's contents to the client
- uses streaming to read the file and send its data to the client 
- use the `.pipe()` method to send the file contents to the response

### Exercise 12: HTTP Uppercaser
Objective:  
- create an http server that only accepts 'POST' requests
- pipe the output of the request to the response as an uppercase string

Students will learn:  
- the concept of mapping. Mention `Array.map()` in JS and show an example. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) has good documentation.
- re-iterating the concept of piping input and output
- filtering for request types and providing an 

### Exercise 13: HTTP JSON API Server
Objective:  
- create an HTTP server that serves JSON data to the client based on the requested URL

Students will learn: 
- What the hell is Unix time?
- How do we deal with date-time data in JS? 
- What is JSON data & how to we work with it?
  - eg: creating it, parsing it, stringifying it
- What is routing?
- How do we parse a URL string in Node (via the url core-module)?
- What is a query string?
- What is a regular expression and how are they useful?

Tips & Tricks:
- search for "url" in the response object using grep:  
  `learnyounode run ex13.js | grep --line-buffered "url"`
- using regular expressions in JS to search strings. [MDN documentation on RE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)






