//array problem set:
function printReverse(arr) {
	for (var i = arr.length -1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var result = 0;
	arr.forEach(function(num) {
		result += num;
	});
	return result;
}

function max(arr) {
	var max = arr[0];
	arr.forEach(function(num) {
		if (num > max) {
			max = num;
		};
	});
	return max;
}

//Building our own forEach
function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

//Same function to be used as a method
Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

//Objects: create a movie database & print it out
var movieDB = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
]

for (var i = 0; i < movieDB.length; i++) {
	if (movieDB[i].hasWatched) {
		console.log("You have watched \"" + movieDB[i].title + "\" - " + movieDB[i].rating + " stars");
	} else {
		console.log("You have not watched \"" + movieDB[i].title + "\" - " + movieDB[i].rating + " stars");
	}
	
}