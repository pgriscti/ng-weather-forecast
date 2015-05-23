'use strict';

describe('day forecast directive controller', function () {

	var controller,
		constants,
		createController,
		scope;

	beforeEach(module('weatherApp'));

	beforeEach(function () {
		scope = {};
	});

	beforeEach(inject(function ($injector){
		var $controller = $injector.get('$controller');
		constants = $injector.get('constants');

		createController = function () {
			return $controller('dayForecastDirectiveController', {
				$scope: scope,
				constants: constants
			});
		};
	}));

	it('should put the the correct string on the scope', function () {
		controller = createController();

		expect(scope.dayTemp).toEqual(constants.strings.dayTemp);
	});
});