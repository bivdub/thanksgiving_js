"use strict";

var zip = function (arr1, arr2 ) {
	return arr1.map(function(e, count) {
		var temp = [];
		temp.push(e, arr2[count]);
		return temp;
	})
	// return temp;
}

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

console.log(zip(artists, albums));