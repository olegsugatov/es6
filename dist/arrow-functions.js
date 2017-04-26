'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

////////////old school 
function add_1(x, y) {
	return x + y;
}
console.log(add_1(2, 5));

// =>
var add = function add(x, y) {
	return x + y;
};
console.log(typeof add === 'undefined' ? 'undefined' : _typeof(add));
console.log(add(2, 5));

////////////old school 
var square_1 = function square_1(x) {
	return x * x;
};
console.log(square_1(3));

// => if 1 parameters () don't need
var square = function square(x) {
	return x * x;
};
console.log(square(5));

////////////old school 
var giveMeAnswer_1 = function giveMeAnswer_1() {
	return 42;
};
console.log(giveMeAnswer_1());

// =>
var giveMeAnswer = function giveMeAnswer() {
	return 24;
};
console.log(giveMeAnswer());

////////////old school 
var log_1 = function log_1() {
	console.log('Logging');
};
log_1();

// =>
var log = function log() {
	return console.log('Log');
};
log();

////////////old school 
var multiply_1 = function multiply_1(x, y) {
	var result = x * y;
	return result;
};

console.log(multiply_1(10, 10));

// =>
var multiply = function multiply(x, y) {
	var result = x * y;
	return result;
};
console.log(multiply(1, 10));

////////////old school 
var getPerson_1 = function getPerson_1() {
	return { name: 'John' };
};

console.log(getPerson_1());

// =>
var getPerson = function getPerson() {
	return { name: 'Vashia' };
};
console.log(getPerson());

////////////old school 
// IIFE - Immediately Invoked function expression
(function () {
	console.log('IIFE_1');
})();

// =>
(function () {
	return console.log('IIFE');
})();

///////////// => arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

////////////old school
numbers.forEach(function (num) {
	sum += num;
});
console.log(sum);

// => 
numbers.forEach(function (num) {
	return sum += num;
});
console.log(sum);

var squared = numbers.map(function (n) {
	return n * n;
});
console.log(squared);

///////////// => objects
var person = {
	name: 'Bob',
	greet: function greet() {
		var that = this;
		window.setTimeout(function () {
			console.log('Hello, my name is ' + that.name);
			console.log('"this" is', this);
			console.log('"this" is', that);
		}, 2000);
	}
};

person.greet();

// => this refer on window
var person_ = {
	name: 'Amanda',
	greet: function greet() {
		var _this = this;

		window.setTimeout(function () {
			console.log('Hello, my name is ' + _this.name);
			console.log('"this" is', _this);
		}, 2000);
	}
};

person_.greet();

// => can't use like a objects constructor with new
var Task = function Task() {
	return console.log("Create a task");
};
var task = new Task();

// alson can't use this functions
Task.bind();
Task.call();
Task.apply();