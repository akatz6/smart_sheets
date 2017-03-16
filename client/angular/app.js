var app = angular.module('app', ['ngRoute', 'ngMessages'])
.config(function ($routeProvider) {
$routeProvider
	 .when('/',{
		templateUrl: 'angular/partials/sheet.html'
	 })
	.otherwise({
		templateUrl: 'angular/partials/sheet.html'
	})
});