weatherApp.factory('weatherModel', ['$rootScope', 'constants',
    function ($rootScope, constants) {
    'use strict';
    
    var forecastData,
        getForecastData,
        setForecastData;

    getForecastData = function getForecastData () {
        return forecastData;
    };
    
    setForecastData = function setForecastData (data) {
        forecastData = data;
        $rootScope.$emit(constants.events.newForecastData);
    };
    
    return {
        getForecastData: getForecastData,
        setForecastData: setForecastData
    };
    
}]);
