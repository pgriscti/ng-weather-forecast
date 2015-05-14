weatherApp.directive('forecastDirective', function () {
    'use strict';
    
    return {
        restrict: 'E',
        scope: {
            convertToDay: '&',
            convertToFarenheit: '&',
            day: '='
        },
        templateUrl: 'day-forecast-element/directive-partial.html'
    };
});