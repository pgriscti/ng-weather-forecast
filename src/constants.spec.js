'use strict';

describe('Constants', function () {
	var constants;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector) {
		constants = $injector.get('constants');
	}));

	it('should contain all the correct constant strings', function () {
		expect(constants.strings.forecastCity).toEqual('Forecast by city');
		expect(constants.strings.dayTemp).toEqual('Day Time Temperature:');
		expect(constants.strings.forecastDays).toEqual('Forecast Days:');
		expect(constants.strings.forecastFor).toEqual('Forecast for');
	});

	it('should contain the correct defaul values', function () {
		expect(constants.defaultValues.forecastNumDays).toEqual(5);
	});
});