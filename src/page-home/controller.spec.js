'use strict';

describe('Home Controller', function () {
	var constants,
		controller,
		createController,
		expectedWeatherData,
		httpBackend,
		location,
		scope,
		weatherModel;

	beforeEach(module('weatherApp'));

	beforeEach(function () {
		expectedWeatherData = {
			data: 'dummyWeatherData'
		};

		location = {
			path: sinon.stub()
		};

		weatherModel = {
			setForecastData: sinon.stub()
		};
	});

	beforeEach(inject(function ($injector, $httpBackend, $rootScope, _constants_) {
		var $controller = $injector.get('$controller');
		scope = $rootScope.$new();
		constants = _constants_;
		httpBackend = $httpBackend;

		createController = function () {
			return $controller('HomeController', {
				$location: location,
				$scope: scope,
				constants: constants,
				weatherModel: weatherModel
			});
		};
	}));

	beforeEach(inject(function ($httpBackend) {
		httpBackend = $httpBackend;
	}));

	afterEach(function () {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	describe('when initialised', function () {

		beforeEach(function () {
			controller = createController();
		});

		it('should get and put the weather data on the weatherModel', function () {
			httpBackend.expectGET(constants.config.apiUrl + '?cnt=5&q=London'
		  	).respond(expectedWeatherData);

		  	scope.getForecast();
		  	httpBackend.flush();

		  	expect(weatherModel.setForecastData.withArgs(expectedWeatherData).callCount).toEqual(1);
		});

		it('should change location paths when the data is retrieved', function () {
			httpBackend.expectGET(constants.config.apiUrl + '?cnt=5&q=London'
			).respond(expectedWeatherData);

			scope.getForecast();
			httpBackend.flush();

			expect(location.path.withArgs(constants.pages.forecast).callCount).toEqual(1);
		});

		it('should not put the weather data when fetching data returns an error', function () {
			// var errorResponse;

			// errorResponse = {
			// 	status: '400'
			// };

			// httpBackend.get(constants.config.apiUrl + '?cnt=5&q=London'
			// ).respond(errorResponse);
		});

	});
});