'use strict';

describe('Constants', function () {
	var constants;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector) {
		constants = $injector.get('strings');
	}));

	it('should contain all the correct constants', function () {
		expect(constants.forecastCity).toEqual('Forecast by city');
		expect(constants.dayTemp).toEqual('Day Time Temperature:');
		expect(constants.forecastDays).toEqual('Forecast Days:');
		expect(constants.forecastFor).toEqual('Forecast for');
	});
});