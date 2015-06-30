weatherApp.directive('circles', function () {
	'use strict';

	return {
		controller: 'circlesDirectiveController',
		restrict: 'E',
		template: '<svg></svg>',
		scope: {},
		link: function (scope, element, attrs) {
			scope.$watch(attrs.temperatures, function (temperatures) {

				var w = 150, 
					h = 150,
					svg;


				svg = d3.select(element[0].firstChild)
						.attr('width', w)
						.attr('height', h);

				svg.selectAll('circle')
					.data(temperatures)
						.enter()
					.append('circle')
						.attr('r', function(d) {return d.r})
						.attr('cx', function(d, i) {return d.r*2+i})
						.attr('cy', function(d, i) {return d.r})
						.on('mouseover', function (d) {d3.select(this).style('fill', 'steelblue');})
						.on('mouseout', function () {d3.select(this).style('fill', 'black')})
						.transition()
							.delay(200)
							.duration(1500)
							.attr('r', 10)
							.attr('fill', 'red');

			});
		}
	};
});
