weatherApp.directive('daySelector', function () {
	'use strict';

	return {
		controller: 'daySelectorDirectiveController',
		restrict: 'EA',
		scope: {},
		templateUrl: '/src/day-selector/directive-partial.html'
	};
});