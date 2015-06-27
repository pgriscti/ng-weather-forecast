weatherApp.controller('HomeController', [
	'$http', '$location', '$scope', 'constants', 'weatherModel', 
	function ($http, $location, $scope, constants, weatherModel) {
    'use strict';

    $scope.city = 'London';
    $scope.forecastCity = constants.strings.forecastCity;

    $scope.getForecast = function () {

      var dataPromise = $http.get(constants.config.apiUrl, {
        params: {
          q: $scope.city,
          cnt: constants.defaultValues.forecastNumDays
        }
      });

      dataPromise.success(function (data) {
          weatherModel.setForecastData(data);
          $location.path(constants.pages.forecast);
      });

      dataPromise.error(function (data) {
        // TODO - do something here
      	console.log('error');
      });
    };
    
}]);