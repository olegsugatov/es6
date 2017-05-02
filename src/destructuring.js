// old school
// let languages = ['JavaScript', 'PHP', 'Phyton', 'Ruby'];

// let js 	= languages[0];
// let php = languages[1];
// let py 	= languages[2];
// let rb 	= languages[3];


// es6
let [js, php, py, rb] = ['JavaScript', 'PHP', 'Phyton', 'Ruby'];
// слева деструктивное выражение, справа сам массив
console.log(js, php, py, rb);


// let scores = [3, 4, 5];
// let [low, , high] = scores;

// console.log(low, high);


// let scores = [3, 4, 5, 6, 7];
// let [low, ...rest] = scores;

// console.log(low, rest);


// let scores = [3, 4];
// let [low, mid, high = 5] = scores;

// console.log(low, mid, high);


// like array
// let scores = [3, 4, [5, 6]];
// let [low, mid, [high,higher]] = scores;

// console.log(low, mid, high, higher);



// let scores = [3, 4, [5, 6]];
// let [low, mid, [high,higher]] = scores;

// console.log(low, mid, high, higher);

function computeScore([low, mid]) {
	console.log(low, mid);
}

// computeScore([3, 4]);

function getScores () {
	return [3, 4, 5];
}

let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low, mid, high);


let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is ', yes);
console.log('No is ', no);




