let Coordinates = require('./src/coordinates.js');
let Forecast = require('./src/forecast.js');

let coords = new Coordinates('18', '-65');
let data = {
	temperature: 89,
	address: 'Rio Grande, PR',
	precipitation: 55,
	windSpeed: 12,
	windDirection: 10,
	summary: 'Chance of rain in the evening.',
	high: 92,
	low: 72
}

let forecast = new Forecast(data.temperature, data.address, data.precipitation, data.windSpeed, data.windDirection, data.summary, data.high, data.low)

console.log(forecast);
console.log(coords);
