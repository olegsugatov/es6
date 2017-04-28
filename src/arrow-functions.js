////////////old school 
function add_1 (x, y) {
	return x + y;
}
console.log(add_1(2,5));

// =>
let add = (x, y) => x + y;
console.log(typeof add);
console.log(add(2, 5));


////////////old school 
let square_1 = function (x) {
	return x * x;
}
console.log(square_1(3));

// => if 1 parameters () don't need
let square = x => x * x;
console.log(square(5));


////////////old school 
let giveMeAnswer_1 = function() {
	return 42;
}
console.log(giveMeAnswer_1());

// =>
let giveMeAnswer = () => 24;
console.log(giveMeAnswer());


////////////old school 
let log_1 = function() {
	console.log('Logging');
}
log_1();

// =>
let log = () => console.log('Log');
log();


////////////old school 
let multiply_1 = function(x, y) {
	let result = x * y;
	return result;
}

console.log(multiply_1(10,10));

// =>
let multiply = (x, y) => { 
	let result = x * y; 
	return result;
}
console.log(multiply(1,10));


////////////old school 
let getPerson_1 = function() {
	return { name: 'John' };
};

console.log(getPerson_1());

// =>
let getPerson = () =>  ({name: 'Vashia'});
console.log(getPerson());


////////////old school 
// IIFE - Immediately Invoked function expression
(function() {
	console.log('IIFE_1');
})();

// =>
(() => console.log('IIFE'))();


///////////// => arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

////////////old school
numbers.forEach(function(num){
	sum += num;
});
console.log(sum);

// => 
numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);


///////////// => objects
let person = {
	name: 'Bob',
	greet: function () {
		var that = this;
		window.setTimeout(function() {
			console.log('Hello, my name is ' + that.name);
			console.log('"this" is', this);
			console.log('"this" is', that);
		}, 2000);
	}
};

person.greet();

// => this refer on window
let person_ = {
	name: 'Amanda',
	greet: function() {
		window.setTimeout(() => {
			console.log('Hello, my name is ' + this.name);
			console.log('"this" is', this);
		}, 2000);
	}
};

person_.greet();

// => can't use like a objects constructor with new
let Task = () => console.log("Create a task");
let task = new Task();

// alson can't use this functions
Task.bind();
Task.call();
Task.apply();



// Hexlet
// surface area function

const surfaceAreaCalculator = (radius) => {
	return 4 * 3.14 * _square(radius);
	// return 4 * 3.14 * radius * radius;
}
const _square = (num) => {
	return num * num;
}

const surfaceOfMars = surfaceAreaCalculator(3390);
console.log('Mars surface is ' + surfaceOfMars);


// percent from a number
const percentageCalculator = (number, total) => {
	return number * 100 / total;
	console.log(`Percentage :${number} from ${total}`);
}

console.log('How much from december is gone ? ' + percentageCalculator(16, 31));

// Fahrenheits to Celsius
const fahrToCels = (fahr) => {
	return fahr - 32 * 5/9;
}

console.log("Convertation is " + fahrToCels(50));
















