weatherApp.directive('planets', function () {
	'use strict';

	return {
		controller: 'planetsDirectiveController',
		restrict: 'E',
		template: '<svg></svg>',
		link: function (scope, element, attrs) {
			scope.$watch(attrs.temperatures, function (temperatures) {

			var canvasHeight = 250,
				canvasWidth = 250,
				colWidth = 30,
				colorScale,
				svg,
				t0 = Date.now(),
				xAxis,
				xAxisScale;

			colorScale = d3.scale.linear()
				.domain([0, 100])
				.range(['blue', 'red']);

			xAxisScale = d3.scale.linear()
				.domain([0, 100])
				.range([0, 100]);

			xAxis = d3.svg.axis()
				.scale(xAxisScale);


			svg = d3.select(element[0].firstChild)
				.attr('width', canvasWidth)
				.attr('height', canvasHeight)
				.append('g');

			svg.attr('transform', 'translate(100, 100)');

			svg.selectAll('rect')
				.data(temperatures)
				.enter()
					.append('rect')
				.attr('y', function(d, i) {return i * (colWidth + 4)})
					.attr('width', function (d) {return d.temp})
					.attr('height', colWidth)
					.attr('fill', function (d) {return colorScale(d.temp)});

			svg.append('g')
				.call(xAxis)
				// .attr('transform', 'translate(0, ' + temperatures.length * colWidth + ')')
				.attr('orientation', 'bottom');

			d3.timer(function () {
				var delta = (Date.now() - t0),
					speed = delta/333;
				svg.selectAll('g')
				.attr('transform', function (d) {
					return 'rotate(' + speed + ')';
				})
			});

			});
		}
	};
});
