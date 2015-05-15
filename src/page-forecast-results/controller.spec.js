'use strict'

describe('Forecast page controller', function () {
	var	controller,
		createController,
		scope,
		strings,
		weatherModel,
		weatherProvider,
		rootScope;

	beforeEach(module('weatherApp'));

	beforeEach(function () {
		scope = {};
		rootScope = {
			$broadcast: sinon.stub(),
			$on: sinon.stub()
		};
		strings = {};
		weatherModel = {
			getForecastData: sinon.stub()
		};
		weatherProvider = {
			convertToFahrenheit: sinon.stub(),
			convertToDay: sinon.stub()
		};
	});

	beforeEach(inject(function ($injector) {
		var $controller = $injector.get('$controller');

		createController = function () {
			return $controller ('ForecastController', {
				$rootScope: rootScope,
				$scope: scope,
				strings: strings,
				weatherModel: weatherModel,
				weatherProvider: weatherProvider
			});
		};
	}));

	beforeEach(function () {
		controller = createController();
	});

	it('should call the weatherProvider.convertToFahrenheit when convertToFahrenheit is called on the scope', function () {
		var tempInKelvin;

		tempInKelvin = 888;

		scope.convertToFahrenheit(tempInKelvin);

		expect(weatherProvider.convertToFahrenheit.withArgs(tempInKelvin).callCount).toEqual(1);
	});

	it('should call the weatherProvider.convertToDay when convertToDay is called on the scope', function () {
		var dayInMillisecionds;

		dayInMillisecionds = 1234567890;

		scope.convertToDay(dayInMillisecionds);

		expect(weatherProvider.convertToDay.withArgs(dayInMillisecionds).callCount).toEqual(1);
	});

	it('should put the forecast data on the scope when the newForecastData event is emitted on the rootScope', function () {
	
     	var callback = rootScope.$on.withArgs('newForecastData', sinon.match.func).firstCall.args[1];
     	callback();

		expect(scope.forecast);
	});
});