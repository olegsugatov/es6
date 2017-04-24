class Task {
	constructor(title = Task.getDefaultTitle()) {
		this.title = title;
		this._done = false;
		Task.count += 1;
		console.log('create task');
	}

	get done() {
		return this._done === true ? 'Done!' : 'Not done!';
	}

	set done(value) {
		if(value !== undefined && typeof value ==='boolean') {
			this._done = value;
		} else {
			console.log('Error! Need add true or false!');
		}
	}

	complete() {
		this.done = true;
		console.log(`Task "${this.title}" is done`)
	}

	static getDefaultTitle() {
		return 'Task';
	}
}

// declare static variable
Task.count = 0;

let task = new Task('clean room');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
// let task2 = new Task('buy products');
// let task3 = new Task('');

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log(Task.count);

// task2.complete();
// console.log(typeof task);
// console.log(task instanceof Task);
