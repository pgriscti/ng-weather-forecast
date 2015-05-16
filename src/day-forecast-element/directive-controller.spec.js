'use strict';

describe('day forecast directive controller', function () {

	var controller,
		createController,
		scope;

	beforeEach(module('weatherApp'));

	beforeEach(function () {
		scope = {};
	});

	beforeEach(inject(function ($injector){
		var $controller = $injector.get('$controller');

		createController = function () {
			return $controller('dayForecastDirectiveController', {
				$scope: scope
			});
		};
	}));

	it('should', function () {
		controller = createController();
	});
});