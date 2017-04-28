"use strict";

// Factorial
// n+(n-1)
var factorial = function factorial(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

var answer = factorial(5);
console.log("Recursion is = " + answer);

// Factorial from begin to end
var sumFactorial = function sumFactorial(begin, end, step) {
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
var sequenceSum = function sequenceSum(begin, end, step) {
	if (end < begin) {
		return 0;
	} else if (end === begin) {
		return end;
	} else {
		return end + sequenceSum(begin, end - step, step);
	}
};

console.log("2, 6, 2 (12) = " + sequenceSum(2, 6, 2));
console.log("1, 5, 1 (15) = " + sequenceSum(1, 5, 1));
console.log("1, 5, 3 (5)  = " + sequenceSum(1, 5, 3));

// Factorial from end to begin
var teacherSum = function teacherSum(begin, end, step) {
	if (begin > end) {
		return 0;
	} else {
		return begin + teacherSum(begin + step, end, step);
	}
};

console.log("2, 6, 2 (12) = " + teacherSum(2, 6, 2));
console.log("1, 5, 1 (15) = " + teacherSum(1, 5, 1));
console.log("1, 5, 3 (5)  = " + teacherSum(1, 5, 3));