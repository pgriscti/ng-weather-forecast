weatherApp.controller('sunDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.planets = [
			{ R: 50, r:  5, speed: 5, phi0: 90},
			{ R: 10, r: 10, speed: 5, phi0: 190}
		];

		$scope.model = {
			test2: [
				{x: 45, y: 45},
				{x: 100, y: 145},
				{x: 10, y: 20},
				{x: 80, y: 150},
				{x: 5, y: 400}
			]
		};
	}
]);