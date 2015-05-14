'use strict';

describe('Day forecast directive', function () {
	var directive;

	beforeEach(module('weatherApp'));
	beforeEach(module('ngResource', function ($provide, $controllerProvider) {
		$controllerProvider.register('HomeController', function ($scope) {
			$scope.hello = 'pg';
		});
	}));

	it('should controller', inject(function ($rootScope, $controller) {
		var $scope,
			controller;

		$scope = $rootScope.$new();
		controller = $controller('HomeController', {$scope: $scope});
	}));

	// beforeEach(inject(function ($injector, foo) {
	// 	directive = $injector.get('forecastDirective')[0];
	// 	console.log(foo);
	// }));

	it('should restrict to E', function () {
		// expect(directive.restrict).toEqual('E');
	});
});