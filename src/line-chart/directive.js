weatherApp.directive('lineChart', function () {
	'use strict';

	return {
		controller: 'lineChartDirectiveController',
		restrict: 'E',
		scope: {},
		template: '<svg></svg>' 
	}
});