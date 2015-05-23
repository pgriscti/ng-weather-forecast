weatherApp.controller('dayForecastDirectiveController', [
	'$scope',
	'constants', 
	function ($scope, constants) {
		'use strict';
		
		$scope.dayTemp = constants.strings.dayTemp;
	}
]);