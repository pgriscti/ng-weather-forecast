weatherApp.controller('HomeController', [
	'$scope', 'strings', 'weatherService', 
	function ($scope, strings, weatherService) {
    'use strict';

    $scope.city = 'London';
    $scope.forecastCity = strings.forecastCity;

    $scope.getForecast = function () {
    	var numDays = 5;
        weatherService.getForecast($scope.city, numDays);
    };
}]);