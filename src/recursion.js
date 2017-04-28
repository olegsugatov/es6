// Factorial
// n+(n-1)
const factorial = (n) => {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

const answer = factorial(5);
console.log("Recursion is = " + answer);




// Factorial from begin to end
const sumFactorial = (begin, end, step) => {
	if (begin > end) {
		return 0;
	} else if (end === begin) {
		return begin;
	} else {
		return begin + sumFactorial(begin + step, end, step);
	}
};

console.log("2, 6, 2 (12) = " + sumFactorial(2, 6, 2));
console.log("1, 5, 1 (15) = " + sumFactorial(1, 5, 1));
console.log("1, 5, 3 (5)  = " + sumFactorial(1, 5, 3));




// Factorial from end to begin
const sequenceSum = (begin, end , step) => {
	if (end < begin) {
		return 0;
	} else if (end === begin) {
		return end;
	} else {
		return end + sequenceSum(step, end - step, step);
	}
};

console.log("2, 6, 2 (12) = " + sequenceSum(2, 6, 2));
console.log("1, 5, 1 (15) = " + sequenceSum(1, 5, 1));
console.log("1, 5, 3 (5)  = " + sequenceSum(1, 5, 3));