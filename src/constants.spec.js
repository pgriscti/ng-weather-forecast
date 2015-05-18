'use strict';

describe('Constants', function () {
	var constants;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector) {
		constants = $injector.get('constants');
	}));

	it('should have the correct config values', function () {
		expect(constants.config.apiUrl).toEqual('http://api.openweathermap.org/data/2.5/forecast/daily');
	});

	it('should contain all the correct constant strings', function () {
		expect(constants.strings.forecastCity).toEqual('Forecast by city');
		expect(constants.strings.dayTemp).toEqual('Day Time Temperature:');
		expect(constants.strings.forecastDays).toEqual('Forecast Days:');
		expect(constants.strings.forecastFor).toEqual('Forecast for');
	});

	it('should have the correct values for custom events', function () {
		expect(constants.events.newForecastData).toEqual('newForecastData');
	});

	it('should contain the correct pages', function () {
		expect(constants.pages.home).toEqual('/');
		expect(constants.pages.forecast).toEqual('/forecast');
	});

	it('should contain the correct default values', function () {
		expect(constants.defaultValues.forecastNumDays).toEqual(5);
	});
});