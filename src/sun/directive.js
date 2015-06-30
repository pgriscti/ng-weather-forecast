weatherApp.directive('sun', function () {
	'use strict';

	return {
		controller: 'sunDirectiveController',
		restrict: 'E',
		template: '<svg></svg>',
		link: function (scope, element, attrs) {
			scope.$watch(attrs.sunData, function (sunData) {

				var w = 150, 
					h = 150,
					container,
					t0 = Date.now(),
					planets,
					svg;

				planets = [
					{ R: 50, r:  5, speed: 5, phi0: 90},
					{ R: 10, r: 10, speed: 5, phi0: 190}
				];

				svg = d3.select(element[0].firstChild)
						.attr('width', w)
						.attr('height', h);

				svg.append('circle')
					.attr('r', 20)
					.attr('cx', w/2)
					.attr('cy', h/2)
					.attr('class', 'sun');

				container = svg.append('g')
							.attr('transform', 'translate(' + w/2 + ',' + h/2 + ')');

				container.selectAll('g.planet')
					.data(planets)
						.enter()
						.append('g')
						.attr('class', 'planet')
						.each(function(d, i) {
							d3.select(this).append('circle')
							.attr('class', 'orbit')
							.attr('r', d.R)
							.attr('fill', '#cccccc');

							d3.select(this).append('circle')
							.attr('r', d.r)
							.attr('cx',d.R)
							.attr('cy', 0)
							.attr('class', 'planet')
							.attr('fill', 'yellow')
							.attr('stroke-width', '1')
							.attr('stroke', 'black');
						});

				d3.timer(function() {
					var delta = (Date.now() - t0);
					svg.selectAll('.planet').attr('transform', function(d) {
						return 'rotate(' + d.phi0 + delta * d.speed/200 + ')';
					});
				});

			});
		}
	};
});
