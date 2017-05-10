'use strict';

// promises ES6 cleaning

function applyForVisa(documents) {
	console.log('Processing on Application...');
	var promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			Math.random() > 0 ? resolve({}) : reject('Visa is denaid: did not have enough documents');
		}, 2000);
	});
	return promise;
}

function getVisa(visa) {
	console.info('Visa received');
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			return resolve(visa);
		}, 2000);
	});
}

function bookHotel(visa) {
	console.log(visa);
	console.log('Booking hotel');
	return Promise.resolve(visa);
}

function buyTickets(booking) {
	console.log('Buy tickets');
	console.log('Booking', booking);
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
	return console.error(error);
});

// promises
/* function applyForVisa(documents) {
	console.log('Processing on Application...');
	let promise =  new Promise(function(resolve, reject) {
		setTimeout(function() {
			Math.random() > .5 ? resolve({}) : reject('Visa is denaid: did not have enough documents');
		}, 2000);
	});
	return promise;
}

function bookHotel() {}

function buyTickets() {}

applyForVisa({})
	.then( function(visa) {
		console.info('Visa received');
	},
	function(reason) {
		console.error(reason);
	});
*/

// callbacks
/*function applyForVisa(documents, resolve, reject) {
	console.log('Processing on Application...');
	setTimeout(function() {
		Math.random() > .5 ? resolve({}) : reject('Visa is denaid: did not have enough documents');
	}, 2000);
}

function bookHotel() {

}

function buyTickets() {

}

applyForVisa({}, function(visa) {
	console.info('Visa received');
	// calback hell
	bookHotel(visa, function(reservation) {
		buyTickets(reservation, function() {

		}, function() {

		})
	}, function(error){

	})
},
function(reason) {
	console.error(reason);
});
*/