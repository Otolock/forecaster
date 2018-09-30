/*
 * Represents a weather forecast.
 */
class Forecast {
	/**
	 * Create a weather forecast.
	 * @param {number} temperature - The current temperature
	 * @param {string} address - The location weather is being displayed for.
	 * @param {number} precipitation - The chance of rain.
	 * @param {number} windSpeed - The current wind speed.
	 * @param {number} windDirection - The direction the wind is blowing in degrees.
	 * @param {string} summary - A summary of the current weather conditions.
	 * @param {number} high - The day's high temperatue.
	 * @param {number} low - The day's low temperature.
	 */
	constructor(temperature, address, precipitation, windSpeed, windDirection, summary, high, low) {
		/* The following if statements verify that the given arguments are valid. */
		if (!isNumber(temperature)) {
			throw new SyntaxError('temperature is not a Number.');
		}

		if (!isNumber(precipitation)) {
			throw new SyntaxError('precipitation is not a Number.');
		}

		if (!isNumber(windSpeed)) {
			throw new SyntaxError('windSpeed is not a Number.');
		}

		if (!isNumber(high)) {
			throw new SyntaxError('high is not a Number.');
		}

		if (!isNumber(low)) {
			throw new SyntaxError('low is not a Number.');
		}

		if(!isString(address)) {
			throw new SyntaxError('address is not a String.');
		}

		if (!isNumber(windDirection)) {
			throw new SyntaxError('windDirection is not a Number.');
		}

		if (!isString(summary)) {
			throw new SyntaxError('summary is not a String.');
		}

		this.temperature = temperature;
		this.address = address;
		this.precipitation = precipitation;
		this.windSpeed = windSpeed;
		this.windDirection = degreesToCompass(windDirection);
		this.summary = summary;
		this.high = high;
		this.low = low;
	}
}

/** 
 * Validate that the given value is of type Number.
 * @param {number} value - The number to verify. 
 */
function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

/** 
 * Validate that the given value is of type String.
 * @param {string} value - The String `to verify. 
 */
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

/* Snippet taken from https://stackoverflow.com/a/48750814 */
function degreesToCompass(angle) {
	let directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
	return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
}

module.exports = Forecast;
