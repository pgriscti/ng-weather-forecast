weatherApp.controller('HomeController', [
	'$http', '$scope', 'constants', 
	function ($http, $scope, constants) {
    'use strict';

    $scope.city = 'London';
    $scope.forecastCity = constants.strings.forecastCity;

    $scope.getForecast = function () {
    	var numDays = constants.defaultValues.forecastNumDays;
        // weatherService.getForecast($scope.city, numDays);
        // var data = $scope.getData($scope.city, numDays);
    // };

    // $scope.getData = function (city, numDays) {
      // var dataPromise = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
      //   params: {
      //     q: $scope.city,
      //     cnt: numDays
      //   }
      // });

 var dataPromise = $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
        params: {
          q: $scope.city,
          cnt: numDays
        }
      });

      dataPromise.success(function (data) {
          // weatherModel.setForecastData(data);
          // $location.path('/forecast');
      });

      dataPromise.error(function (data) {
      	console.log('error');
      });
    };
    
}]);