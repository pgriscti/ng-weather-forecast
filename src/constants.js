weatherApp.constant('constants', {
	config: {
		apiUrl: 'http://api.openweathermap.org/data/2.5/forecast/daily'
	},
	defaultValues: {
		forecastNumDays: 5
	},
	events: {
		newForecastData: 'newForecastData'
	},
	pages: {
		home: '/',
		forecast: '/forecast'
	},
	strings: {
		forecastCity: 'Forecast by city',
		dayTemp: 'Day Time Temperature:',
		forecastDays: 'Forecast Days:',
		forecastFor: 'Forecast for'
	}
});