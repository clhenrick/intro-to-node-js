// console.log(process.argv)

var argv = process.argv;
var total = 0;

for (var i=0; i<argv.length; i++) {
	if (i > 1) {
		total += parseInt(argv[i]);
	}
}

console.log(total);

/* actual answer: */
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)