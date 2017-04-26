// function declaration
/*function Task () {

}

// function expression
let Task = function Task () {

}

// class is a function, class declaration
class Task () {
	constructor () {
		console.log('Creating a task');
	}
}*/

// class expression
let Task = class Task {
	constructor() {
		console.log('Creating a task');
	}
}

let subTask = class extends Task {
	constructor() {
		super();
		console.log('Creating subTask');
	}
}

let task = new Task();
let subtask = new subTask();

console.dir(task);
console.dir(subtask);