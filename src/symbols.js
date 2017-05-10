let object = {
	iterator: 0,
	[Symbol.iterator]() {}
};

let password = Symbol();

let user = {
	username: 'r2d2',
	[password]: 'c3po',
	password: 'asdsfa'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

// let password = user[Symbol.for('password')];
// console.log(password);

console.log(Object.getOwnPropertySymbols(user));


/* 
let symbol = Symbol.for('name');
let name = Symbol.keyFor(symbol);
console.log(symbol);
console.log(name);
*/


// find by name
/*let symbol = Symbol.for('name');
let symbol2 = Symbol.for('name');
console.log(symbol === symbol2);
*/


// let symbol = Symbol('name');
// console.log(symbol);