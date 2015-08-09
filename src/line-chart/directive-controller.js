weatherApp.controller('lineChardDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = [
			{'temp': '40', 'date': '11/03'},
			{'temp': '22', 'date': '12/03'},
			{'temp': '33', 'date': '13/03'}
		];
	}
]);