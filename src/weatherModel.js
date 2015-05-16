weatherApp.factory('weatherModel', ['$rootScope', 
    function ($rootScope) {
    'use strict';
    
    var forecastData,
        getForecastData,
        setForecastData;

    getForecastData = function getForecastData () {
        return forecastData;
    };
    
    setForecastData = function setForecastData (data) {
        forecastData = data;
        $rootScope.$emit('newForecastData');
    };
    
    return {
        getForecastData: getForecastData,
        setForecastData: setForecastData
    };
    
}]);
