weatherApp.directive('letters', function () {
	'use strict';

	return {
		controller: 'lettersDirectiveController',
		restrict: 'E',
		template: '<svg></svg>',
		scope: {},
		link: function (scope, element, attrs) {
			scope.$watch(attrs.temperatures, function (temperatures) {

			var canvasHeight = 350,
				canvasWidth = 20,
				svg;

			svg = d3.select(element[0].firstChild)
				.attr('width', canvasWidth)
				.attr('height', canvasHeight)
				.attr('transform', 'translate(100,100)');

			function update(data) {
				var svgText;

				svgText = svg.selectAll('text')
					.data(data);

				svgText.enter()
						.append('text')
						.attr('dy', function(d, i) {return i*20});
				
				svgText.text(function(d){ return d});

				svgText.exit().remove();
			}

			update(temperatures);

			setInterval(function () {
				update(d3.shuffle(temperatures)
					.slice(0, Math.floor(Math.random() * 26)));
			}, 500);

			});
		}
	};
});
