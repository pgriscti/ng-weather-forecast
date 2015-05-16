weatherApp.factory('weatherProvider', function () {
    'use strict';
    
    var convertToDay,
        convertToFarenheit;
    
    convertToDay = function convertToDay (dayInMilliseconds) {
        return dayInMilliseconds * 1000;
    };
    
    convertToFarenheit = function convertToFarenheit (tempInKelvin) {
        return Math.round((1.8 * (tempInKelvin - 273)) + 32);
    };
    
    return {
        convertToDay: convertToDay,
        convertToFarenheit: convertToFarenheit
    };
});