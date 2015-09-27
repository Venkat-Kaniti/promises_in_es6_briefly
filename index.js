'use strict';

// Get cookie dough
let GetCookieDough = (cash) => {

	let doughPerOneDollar = 2;
	let executor = (resolve, reject) => {

		setTimeout(() => {
			resolve(cash * doughPerOneDollar);
		}, 1000);

	};

	return new Promise(executor);
};

// Make cookies from dough
let MakeCookiesFromDough = (dough) => {

	let cookiesPerOneLbDough = 15;
	let executor = (resolve, reject) => {
		setTimeout(() => {
			resolve(dough * cookiesPerOneLbDough);
		}, 1000);
	};

	return new Promise(executor);

};

//Sell cookies and make money
let SellCookies = (cookies) => {

	let priceOfOneCookie = 0.5;
	let executor = (resolve, reject) => {
		setTimeout(() => {
			resolve(cookies * priceOfOneCookie);
		}, 1000);
	};

	return new Promise(executor);

};

//Start cookie business

console.log('Started cookie business..!');

let investment = process.argv[2] || 10;

Promise.resolve(investment)
	.then(GetCookieDough)
	.then(MakeCookiesFromDough)
	.then(SellCookies)
	.then(result => {
		console.log(`$${investment} invested. $${result} worth of cookies sold`);
	});
