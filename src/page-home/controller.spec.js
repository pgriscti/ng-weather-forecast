'use strict';

describe('Home Controller', function () {
	var scope,
		controller,
		createController,
		weatherService;

	beforeEach(module('weatherApp'));

	beforeEach(function () {

		scope = {};
		weatherService = {
			getForecast: sinon.stub()
		};
	});

	beforeEach(inject(function ($injector) {
		var $controller = $injector.get('$controller');

		createController = function () {
			return $controller('HomeController', {
				$scope: scope,
				weatherService: weatherService
			});
		};
	}));

	describe('when initialised', function () {

		beforeEach(function () {
			controller = createController();
		});

		it('should call the weather service with the correct parameters', function () {
			var days = 5,
			city = 'London';

			scope.getForecast(days);

			expect(weatherService.getForecast.withArgs(city, days).callCount).toEqual(1);
		});
	});
});