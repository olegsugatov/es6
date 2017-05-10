'use strict';

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var object = _defineProperty({
	iterator: 0
}, Symbol.iterator, function () {});

var password = Symbol();

var user = (_user = {
	username: 'r2d2'
}, _defineProperty(_user, password, 'c3po'), _defineProperty(_user, 'password', 'asdsfa'), _user);

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