"use strict";

var isPalindrome = function(str) {

	var temp = str.split(' ').join('');
	var reverse = "";

	for (var i = 0; i < temp.length; i++) {
		reverse = temp.charAt(i) + reverse;
	}

	return temp === reverse ? true : false;
}

var myString = "race car";

console.log(isPalindrome(myString));