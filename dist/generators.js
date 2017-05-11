"use strict";

// generator method
var numbers = {
	range: regeneratorRuntime.mark(function range(start, end) {
		var current;
		return regeneratorRuntime.wrap(function range$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						current = start;

					case 1:
						if (!(current <= end)) {
							_context.next = 6;
							break;
						}

						_context.next = 4;
						return current++;

					case 4:
						_context.next = 1;
						break;

					case 6:
					case "end":
						return _context.stop();
				}
			}
		}, range, this);
	})
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = numbers.range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var num = _step.value;

		console.log(num);
	}

	// generator
	/*function* range(start, end) {
 	let current = start;
 	while (current <= end) {
 		yield current++;
 	}
 }
 
 for (let num of range(1, 10)) {
 	console.log(num);
 }
 */

	// iterator
	/*
 function generate() {
 	let current = 1;
 	console.log('Start');
 	return {
 		[Symbol.iterator](){
 			return {
 				next() {
 					let result = { value: undefined, done: true};
 					
 					if(current <= 3 ) {
 						result.value = current;
 						result.done = false;
 						current++;
 					} else {
 						result. value = undefined;
 						result.done = true;
 						console.log('Finish');
 					}
 					return result;				
 				}
 			};
 		}
 	};
 }
 
 let iterator = generate()[Symbol.iterator]();
 iterator.next();
 iterator.next();
 */
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}