"use strict";

var pluck = function(arr, key) {
	return arr.map(function(e){
		return e[key];
	});	
}

var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

console.log(pluck(albums, 'artist'));