'use strict';

angular.module('weatherApp', [
	'ngRoute',
	'weatherApp.filters',
	'weatherApp.services',
	'weatherApp.directives',
	'weatherApp.controllers',
	'iso-3166-country-codes'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'weatherCtrl'});
	$routeProvider.when('/storm', {templateUrl: 'partials/storm.html', controller: 'weatherCtrl'});
	$routeProvider.otherwise({redirectTo: '/forecast'});
}]);