weatherApp.controller('daySelectorDirectiveController', [
	'$scope',
	'constants', 
	'weatherService',
	function daySelectorDirectiveController (
		$scope,
		constants,
		weatherService
	) {
    'use strict';

    $scope.forecastDays = constants.strings.forecastDays;

	$scope.getForecast = function (numDays) {
		weatherService.getForecast('London', numDays);
	};

}]);