'use strict';

describe('Day forecast directive', function () {
	var directive;

	beforeEach(module('weatherApp'));

	// beforeEach(inject(function ($injector) {
	// 	directive = $injector.get('forecastDirective')[0];
	// }));

	// it('should controller', inject(function ($controller) {
	// 	var $scope,
	// 		controller;

	// 	$scope = $rootScope.$new();
	// 	controller = $controller('HomeController', {$scope: $scope});
	// }));

	// beforeEach(inject(function ($injector, foo) {
	// 	directive = $injector.get('forecastDirective')[0];
	// 	console.log(foo);
	// }));

	it('should restrict to E', function () {
		// console.log('asdfasfasfds', directive);
		// expect(directive.restrict).toEqual('E');
	});
});