weatherApp.controller('HomeController', [
	'$scope', 'constants', 'weatherService', 
	function ($scope, constants, weatherService) {
    'use strict';

    $scope.city = 'London';
    $scope.forecastCity = constants.strings.forecastCity;

    $scope.getForecast = function () {
    	var numDays = constants.defaultValues.forecastNumDays;
        weatherService.getForecast($scope.city, numDays);
    };
}]);