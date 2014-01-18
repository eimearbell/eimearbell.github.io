console.debug("Load");
var app = angular.module('app', [ 'ngRoute' ]);
console.debug("Load1");

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'homeController',
		templateUrl : 'html/home.html'
	}).when('/profile', {
		controller : 'homeController',
		templateUrl : 'html/profile.html'
	}).when('/contact', {
		controller : 'homeController',
		templateUrl : 'html/contact.html'
	}).otherwise({
		redirectTo : '/'
	});
});

console.debug("Load2");
app.controller('homeController', function($scope) {
	console.debug("HomeController");
});
