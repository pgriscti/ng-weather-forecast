describe('Weather Provider', function () {

	var weatherProvider;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector) {
		weatherProvider = $injector.get('weatherProvider');
	}));

	it('should have the public properties', function () {
		expect(weatherProvider.convertToDay).toBeDefined();
		expect(weatherProvider.convertToFarenheit).toBeDefined();
	});

	it('should convert the correct amount of milliseconds to the correct date', function () {
		var actualDay,
			dayInMilliseconds,
			expectedDate;

			dayInMilliseconds = 12341234;
			expectedDate = 12341234000;

			actualDay = weatherProvider.convertToDay(dayInMilliseconds);

			expect(actualDay).toEqual(expectedDate);
	});

	it('should convert temperature to farenheit', function () {
		var actualTemperatureInFarenheit,
			expectedTemperatureInFarenheit,
			temperatrueInKelvin;

			expectedTemperatureInFarenheit = 81;
			temperatrueInKelvin = 300;
			actualTemperatureInFarenheit = weatherProvider.convertToFarenheit(temperatrueInKelvin);

			expect(actualTemperatureInFarenheit).toEqual(expectedTemperatureInFarenheit);

	});

});