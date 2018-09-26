/**
 * Represents a geographic coordinate.
 */
class Coordinates {
	/**
	 * Create a coordinate
	 * @param {string} latitude - The geographical latitude.
	 * @param {string} longitude - The geographical longitude.
	 */
	constructor(latitude, longitude) {
		/* Throw an error if latitude or longitude are not Numbers */
		if (isNaN(latitude) || isNaN(longitude)) {
			throw new SyntaxError('One or both parameters is not a number.');
		}
		
		/* Throw an error if latitude exceeds the maximum range [-90, 90] */
		if (latitude < -90 || latitude > 90) {
			throw new RangeError('Latitude exceeds maximum range.');
		}

		/* Throw an error if longitude exceeds the maximum range [-180, 180] */
		if (longitude < -180 || longitude > 180) {
			throw new RangeError('Longitude exceeds maximum range.');
		}

		this.latitude = latitude;
		this.longitude = longitude
	}
}

module.exports = Coordinates;
