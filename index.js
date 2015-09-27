'use strict';

// Get cookie dough
var GetCookieDough = function (cash, cb) {
	var doughPerOneDollar = 2;
	setTimeout(function () {
		cb(null, cash * doughPerOneDollar);
	}, 1000);
};

// Make cookies from dough
var MakeCookiesFromDough = function (dough, cb) {
	var cookiesPerOneLbDough = 15;
	setTimeout(function () {
		cb(null, dough * cookiesPerOneLbDough);
	}, 1000);
};

// Sell cookies and make money
var SellCookies = function (cookies, cb) {
	var priceOfOneCookie = 0.5;
	setTimeout(function () {
		cb(null, cookies * priceOfOneCookie);
	}, 1000);
};


//// CALLBACK HELL
	
// Start cookie business
var investment = process.argv[2] || 10;
GetCookieDough(investment, function (err, dough) {

	MakeCookiesFromDough(dough, function (err, cookies) {

		SellCookies(cookies, function (err, returns) {

			console.log('$'+ investment + ' invested.' + ' $' + returns + ' worth of cookies sold');

		});
	})
});

console.log('Started cookie business..!');
