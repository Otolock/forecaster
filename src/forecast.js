function Forecast(time, summary, icon, precipIntensity, precipProbability, 
				temperature, apparentTemperature, humidity, pressure, windSpeed,
				windBearing, cloudCover, UVIndex, visibility) {
	this.time = time;
	this.summary = summary;
	this.icon = icon;
	this.precipIntensity = precipIntensity;
	this.precipProbability = precipProbability;
	this.temperature = temperature;
	this.apparentTemperature = apparentTemperature;
	this.humidity = humidity;
	this.pressure = pressure;
	this.windSpeed = windSpeed;
	this.windBearing = windBearing;
	this.cloudCover = cloudCover;
	this.UVIndex = UVIndex;
	this.visibility = visibility;
}

/* Snippet taken from https://stackoverflow.com/a/48750814 */
/* Given an angle, returns in what direction the compass would be pointing. */
function degreesToCompass(angle) {
	let directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
	return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
}

module.exports = Forecast;
