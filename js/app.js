console.debug("Load");
var app = angular.module('app', [ 'ngRoute' ]);
console.debug("Load1");

app.controller('homeController', function($scope) {
	console.debug("HomeController");
});
console.debug("Load2");
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'homeController',
		templateUrl : 'templates/home.html'
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
