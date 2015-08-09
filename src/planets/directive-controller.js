weatherApp.controller('planetsDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = [
			{name: 'planet', diameter: 12345678, gravity: 10},
			{name: 'planet1', diameter: 1234, gravity: 5},
			{name: 'planet2', diameter: 123478, gravity: 3},
			{name: 'planet3', diameter: 45678, gravity: 2},
			{name: 'planet4', diameter: 5678, gravity: 20}
		];
	}
]);