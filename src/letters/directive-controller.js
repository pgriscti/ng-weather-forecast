weatherApp.controller('lettersDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = 'abcdefghijklmnopqrstuvwxyz'.split('');
	}
]);