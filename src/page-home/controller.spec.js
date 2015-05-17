'use strict';

describe('Home Controller', function () {
	var constants,
			controller,
			createController,
			httpBackend,
			scope;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector, $httpBackend, $rootScope, _constants_) {
		var $controller = $injector.get('$controller');
		scope = $rootScope.$new();
		constants = _constants_;
		httpBackend = $httpBackend;

		createController = function () {
			return $controller('HomeController', {
				$scope: scope,
				constants: constants
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

		it('should', function () {
			httpBackend.expectGET('http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&q=London'
	  	).respond({
	      	foo: 'foo'
	    });

	  	scope.getForecast();
	  	httpBackend.flush();
		});

	});
});