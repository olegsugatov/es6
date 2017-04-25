class Task {
	constructor(title) {
		this.title = title;
		this.done = false;
		Task.count += 1;
		console.log('Create task');
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	static getDefaultTitle() {
		return 'Task'
	}

	complete() {
		this.done = true;
		console.log(`Task "${this.title}" done`);
	}
}

Task.count = 0;

class subTask extends Task {
	constructor(title) {
		super(title);
		this.parent = parent;
		console.log('Create subtask');
	}

	complete(){
		super.complete();
		console.log(`Subtask "${this.title}" done`);
	}
}

let task = new Task('Learn JavaScript');
let subtask = new subTask('Learn ES6', task);

console.log(subTask.getDefaultTitle());
console.log(subTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);