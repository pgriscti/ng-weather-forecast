weatherApp.directive('lineChart', function () {
	'use strict';

	return {
		controller: 'lineChartDirectiveController',
		restrict: 'E',
		scope: {},
		template: '<svg></svg>',
		link: function (scope, element, attrs) {
			scope.$watch(attrs.temperatures, function (temperatures) {
				console.log('asdfasdf', temperatures);

				var canvasHeight = 250,
					canvasWidth = 250,
					bottomAxisMarginX = 35,
					bottomAxisMarginY = 30,
					leftAxisPadding = 30,
					lineGenerator = d3.svg.line(),
					svg = d3.select(element[0].firstChild),
					xAxis = d3.svg.axis(),
					yAxis = d3.svg.axis(),
					xScale = d3.scale.linear(),
					yScale = d3.scale.linear();


				svg.attr('width', canvasWidth)
					.attr('height', canvasHeight)
					.append('g');

// xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000,2010]),
// yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215]),
				xScale
					.range([0, canvasWidth])
					.domain([0, d3.max(temperatures, function (d) {
							return d.date;
						})
					])

				yScale
					.range([canvasHeight, 0])
					.domain([0, d3.max(temperatures, function (d) {
							return d.temp;
						}) 
					]);    

				xAxis.scale(xScale)
					.ticks(3);
				yAxis.scale(yScale)
					.orient('left');

				svg.append('g')
					.attr('transform', 'translate('+ bottomAxisMarginX +',' + (canvasHeight - bottomAxisMarginY) + ')')
					.call(xAxis);

				svg.append('g')
					.attr('transform', 'translate(' + leftAxisPadding + ',0)')
					.call(yAxis);

				lineGenerator
					.x(function(d) {
						return xScale(d.date);
					})
					.y(function(d) {
						return yScale(d.temp)
					})
					.interpolate('basis');

				svg.append('svg:path')
					.attr('d', lineGenerator(temperatures))
					.attr('stroke', 'green')
					.attr('stroke-width', 2)
					.attr('fill', 'none');

			})
		}
	}
});