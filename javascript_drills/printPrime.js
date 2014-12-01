"use strict";

var printPrime = function(num) {
	var primeArray = [];
	for (var i=1; i<=Math.abs(num); i++) {
		var temp = true
		for (var j = 2; j<i; j++) {
			if (i%j === 0) {
				temp = false;
			}
		}
		if (temp === true) {
			primeArray.push(i);
		}
	}
	return primeArray;
}

console.log(printPrime(1000));