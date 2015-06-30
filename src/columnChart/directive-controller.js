weatherApp.controller('columnChartDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = [
			{temp: 45, day: 'Monday'},
			{temp: 100, day: 'Tuesday'},
			{temp: 10, day: 'Wednesday'},
			{temp: 80, day: 'Thursday'},
			{temp: 5, day: 'Fridday'}
		];
	}
]);