weatherApp.controller('dayForecastDirectiveController', [
	'$scope',
	'strings', 
	function ($scope, strings) {
		'use strict';
		
		$scope.dayTemp = strings.dayTemp;
	}
]);