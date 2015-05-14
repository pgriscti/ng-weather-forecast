'use strict';
var weatherApp = angular.module('weatherApp', [
    'ngRoute', 
    'ngResource'
]);
weatherApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            '/', {
                controller: 'HomeController',
                templateUrl: 'page-home/partial.html'
            }
        )
        .when(
            '/forecast', {
                controller: 'ForecastController',
                templateUrl: 'page-forecast-results/partial.html'
            }
        )
        .when(
            '/forecast/:numDays', {
                controller: 'ForecastController',
                templateUrl: 'page-forecast-resutls/partial.html'
            }
        );
}]);