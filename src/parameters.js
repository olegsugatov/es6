function greetings(greeting, name) {
	console.log(`${greeting} ${name}`);
}


function greet(greeting = 'Hello', name = 'friend') {
	console.log(`${greeting} ${name}`);
}

greet('Hi', 'Oleg');
greet('Hi');
greet(undefined, 'Bill');
greet();

// ES5 sum
function sum() {
	console.log(arguments instanceof Array);
	
	var sum = 0;

	Array.prototype.forEach.call(arguments, function(value){
		sum += value;
	});
	console.log(sum);
}

// ES6 sum
function sum(...values) {
	console.log(values instanceof Array);

	let sum = 0;

	values.forEach(function (value){
		sum += value;
	});

	console.log(sum);
}

// ES6 reduce
function sum(...values) {
	console.log(values.reduce(function(preValue, curValue){
		return preValue + curValue;
	}));
}

sum(5,7,2,10);