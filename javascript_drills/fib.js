"use strict";

var fibIndex = function(num) {
	var fib = [1,1];

	for (var i = 2; i<num; i++) {
		fib.push(fib[i-2] + fib[i-1]);
	}

	return fib[num-1];
}

console.log(fibIndex(10));