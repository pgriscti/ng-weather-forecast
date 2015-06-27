weatherApp.service('weatherService', [
    '$http', '$location', 'weatherModel', 
    function ($http, $location, weatherModel) {
    'use strict';
    
    var getForecast;
    
    getForecast = function getForecast (city, numDays) {
        $http.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
            params: {
                q: city,
                cnt: numDays
            }
        })
        .success(function (data) {
            weatherModel.setForecastData(data);
            $location.path('/forecast');
        });
    };
    
    
    return {
        getForecast: getForecast
    };
}]);