var weatherApp = angular.module('weatherApp', [
    'ngRoute', 
    'ngResource'
]);
weatherApp.config(['$routeProvider', function ($routeProvider) {
'use strict';
    $routeProvider
        .when(
            '/', {
                controller: 'HomeController',
                templateUrl: '/src/page-home/partial.html'
            }
        )
        .when(
            '/forecast', {
                controller: 'ForecastController',
                templateUrl: '/src/page-forecast-results/partial.html'
            }
        )
        .when(
            '/forecast/:numDays', {
                controller: 'ForecastController',
                templateUrl: '/src/page-forecast-resutls/partial.html'
            }
        );
}]);