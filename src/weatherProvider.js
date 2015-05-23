weatherApp.factory('weatherProvider', function () {
    'use strict';
    
    var convertToDay,
        convertToFahrenheit;
    
    convertToDay = function convertToDay (dayInMilliseconds) {
        return dayInMilliseconds * 1000;
    };
    
    convertToFahrenheit = function convertToFahrenheit (tempInKelvin) {
        return Math.round((1.8 * (tempInKelvin - 273)) + 32);
    };
    
    return {
        convertToDay: convertToDay,
        convertToFahrenheit: convertToFahrenheit
    };
});