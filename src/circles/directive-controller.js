weatherApp.controller('circlesDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = [
			{r: 45, y: 45},
			{r: 10, y: 145},
			{r: 10, y: 20},
			{r: 50, y: 150},
			{r: 5, y: 400}
		];
	}
]);