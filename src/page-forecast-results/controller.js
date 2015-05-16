weatherApp.controller('ForecastController', [
	'$rootScope', '$scope', 'strings', 'weatherModel', 'weatherProvider',
    function ($rootScope, $scope, strings, weatherModel, weatherProvider) {
    'use strict';

    $scope.forecastFor = strings.forecastFor;
    $scope.forecast = weatherModel.getForecastData();

    $rootScope.$on('newForecastData', function () {
        $scope.forecast = weatherModel.getForecastData();
    });

    $scope.convertToDay = function convertToDay(dayInMilliseconds) {
        return weatherProvider.convertToDay(dayInMilliseconds);
    };
    
    $scope.convertToFahrenheit = function convertToFahrenheit(tempInKelvin) {
        return weatherProvider.convertToFahrenheit(tempInKelvin);
    };
}]);