'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
	console.log(('Hello ' + name).toUpperCase());
}

greet('Oleg');

function createEmail(to, from, subject, message) {
	console.log('\n\t\tTo: ' + to + '\n\t\tFrom: ' + from + '\n\t\tSubject: ' + subject + '\n\t\tMessage: ' + message + '\n\t');
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are u doing ?');

function add(x, y) {
	console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('5', '7');

var name = 'Oleg';
console.log(upperName(_templateObject, name));

function upperName(literals) {
	return literals[0] + value.toUpperCase();
}