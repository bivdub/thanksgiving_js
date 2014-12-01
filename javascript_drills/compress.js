"use strict";

var compress = function(str) {
	var temp = [];
	var output = [];
	for ( var i = 0; i<=str.length; i++ ) {
		if (str.charAt(i) === str.charAt(i-1)) {
			temp.push(str.charAt(i));
		} else if (str.charAt(i) !== -1) {
			temp.push(str.charAt(i-1));
			if (temp.length > 1) {
				output.push(temp.length, str.charAt(i-1));
				temp = [];
			} else {
				output.push(str.charAt(i-1));
				temp = [];
			}
		}
	}
	return output.join('');
}

var pattern = "AAASSSDDDDRDDSASSDDDSSSAD";

console.log(compress(pattern));