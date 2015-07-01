weatherApp.directive('pieChart', function () {
	'use strict';

	return {
		controller: 'pieChartDirectiveController',
		restrict: 'E',
		template: '<svg></svg>',
		scope: {},
		link: function (scope, element, attrs) {
			scope.$watch(attrs.temperatures, function (temperatures) {

				var arc,
					colors,
					w = 150, 
					h = 150,
					pie,
					t0 = Date.now(),
					svg;

				arc = d3.svg.arc()
					.innerRadius(10)
					.outerRadius(60);

				colors = d3.scale.ordinal()
					.range(['#eeaa00', '#ee2399', '#a34033']);

				pie = d3.layout.pie()
					.value(function(d) { return d.value});

				svg = d3.select(element[0].firstChild)
					.attr('width', w)
					.attr('height', h)
						.append('g')
					.attr('transform', 'translate(80, 80)');

				var arcs = svg.selectAll('slice')
					.data(pie(temperatures))
					.enter()
						.append('g')
						.attr('class', 'slice');

				arcs.append('path')
					.attr('d', function(d) { return arc(d)})
					.attr('fill', function(d) {return colors(d.value)});

				arcs.append('text')
					.attr('transform', function (d) { return 'translate('+ arc.centroid(d) +')'})
					.text(function (d) { return d.data.label})
					.style('text-anchor', 'middle');

				d3.timer(function () {
					var delta = (Date.now() - t0),
						speed = delta/500;
					svg.selectAll('g')
						.attr('transform', function (d) {
							return 'rotate(' + speed + ')';
						});
				});

			});
		}
	};
});
