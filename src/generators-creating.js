// next, return, throw
function* generator() {
	try {
		yield 1;
		yield 2;
		yield 3;
	}
	catch(e) {
		console.log(e);
	}

}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());


/* function* generateArray() {
	yield* [1, 2, 3];
}

function* generator(){
	yield 42;
	yield* generateArray();
	yield 43;
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/


// class SomeClass {
// 	*generator(){ }
// }

// let obj = {
// 	*generator() {}
// };

// let generator = function*() {}

// function* generator () { }