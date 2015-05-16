describe('Weather Model', function () {

	var rootScope,
		weatherModel;

	beforeEach(module('weatherApp'));

	beforeEach(function () {
		rootScope = {
			$emit: sinon.stub()
		};

		module(function ($provide) {
			$provide.value('$rootScope', rootScope)
		});
	});

	beforeEach(inject(function ($injector) {
		weatherModel = $injector.get('weatherModel');
	}));

	it('should have all the public function defined', function () {
		expect(weatherModel.getForecastData).toBeDefined();
		expect(weatherModel.setForecastData).toBeDefined();
	});

	it('should emit a newForecastData event when new forecast data is recieved', function () {
		var forecastData = {
			data: 'dummyData'
		};

		weatherModel.setForecastData(forecastData);
		expect(rootScope.$emit.withArgs('newForecastData').callCount).toEqual(1);
	});
});