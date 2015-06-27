weatherApp.directive('forecastDirective', function () {
    'use strict';
    
    return {
        controller: 'dayForecastDirectiveController',
        restrict: 'E',
        scope: {
            convertToDay: '&',
            convertToFarenheit: '&',
            day: '='
        },
        templateUrl: '/src/day-forecast-element/directive-partial.html'
    };
});