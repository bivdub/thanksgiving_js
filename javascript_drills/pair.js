"use strict";

var pair = function (ob) {
	var key = Object.keys(ob);
	return key.map(function(e, count) {
		var temp = [];
		temp.push(e, ob[e]);
		return temp;
	})
	// return temp;
}

var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}


console.log(pair(obj));