weatherApp.controller('lineChartDirectiveController', [
	'$scope',
	function ($scope) {
		'use strict';

		$scope.temperatures = [
			{'temp': '10', 'date': '40'},
			{'temp': '10', 'date': '50'},
			{'temp': '100', 'date': '100'},
			{'temp': '10', 'date': '150'},
			{'temp': '10', 'date': '200'} 
		];
	}
]);