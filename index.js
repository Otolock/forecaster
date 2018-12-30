let Coordinates = require('./src/coordinates.js');
let Forecast = require('./src/forecast.js');

let SAMPLE_DATA = require("./sample_data.json");

var currentForecast = new Forecast(
	SAMPLE_DATA.currently.time,
	SAMPLE_DATA.currently.summary,
	SAMPLE_DATA.currently.icon,
	SAMPLE_DATA.currently.precipIntensity,
	SAMPLE_DATA.currently.precipProbability,
	SAMPLE_DATA.currently.temperature,
	SAMPLE_DATA.currently.apparentTemperature,
	SAMPLE_DATA.currently.humidity,
	SAMPLE_DATA.currently.pressure,
	SAMPLE_DATA.currently.windSpeed,
	SAMPLE_DATA.currently.windBearing,
	SAMPLE_DATA.currently.cloudCover,
	SAMPLE_DATA.currently.uvIndex,
	SAMPLE_DATA.currently.visibility
);

var hourlyForecasts = [];

for (var i = 0; i < SAMPLE_DATA.hourly.data.length; i++) {
	forecast = new Forecast(
		SAMPLE_DATA.hourly.data[i].time,
		SAMPLE_DATA.hourly.data[i].summary,
		SAMPLE_DATA.hourly.data[i].icon,
		SAMPLE_DATA.hourly.data[i].precipIntensity,
		SAMPLE_DATA.hourly.data[i].precipProbability,
		SAMPLE_DATA.hourly.data[i].temperature,
		SAMPLE_DATA.hourly.data[i].apparentTemperature,
		SAMPLE_DATA.hourly.data[i].humidity,
		SAMPLE_DATA.hourly.data[i].pressure,
		SAMPLE_DATA.hourly.data[i].windSpeed,
		SAMPLE_DATA.hourly.data[i].windBearing,
		SAMPLE_DATA.hourly.data[i].cloudCover,
		SAMPLE_DATA.hourly.data[i].uvIndex,
		SAMPLE_DATA.hourly.data[i].visibility
	);
	hourlyForecasts.push(forecast);
}

var forecast = {
	currently: currentForecast,
	hourly: hourlyForecasts
}

console.log(forecast.currently);

console.log(forecast.hourly);
// let forecast = new Forecast(data.temperature, data.address, data.precipitation, data.windSpeed, data.windDirection, data.summary, data.high, data.low)

// console.log(forecast);
// console.log(coords);
