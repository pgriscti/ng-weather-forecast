describe('On Weather Service', function () {

	var weatherService;

	beforeEach(module('weatherApp'));

	beforeEach(inject(function ($injector) {
		weatherService = $injector.get('weatherService');
	}));

	it('should have the correct public interface', function () {
		expect(angular.isFunction(weatherService.getForecast)).toEqual(true);
	});
    
    it('should', function () {
        weatherService.getForecast('city', 234);
    });
});