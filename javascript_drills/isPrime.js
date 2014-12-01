"use strict";

var isPrime = function(num) {
	if (num === 2){return true};
	var temp = true;
	for (var i=2; i<Math.abs(num); i++) {
		if (num%i === 0) {
			return false;
		}
	}
	return temp;
}

console.log(isPrime(17));