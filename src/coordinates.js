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
		if (isNaN(this.latitude) || isNaN(this.longitude)) {
			throw 'One or both parameters is not a number.';
		}
		
		/* Throw an error if latitude exceeds the maximum range [-90, 90] */
		if (this.latitude < -90 || this.latitude > 90) {
			throw 'Latitude exceeds maximum range.'
		}

		/* Throw an error if longitude exceeds the maximum range [-180, 180] */
		if (this.longitude < -180 || this.longitude > 180) {
			throw 'Longitude exceeds maximum range.'
		}

		this.latitude = latitude;
		this.longitude = longitude
	}
}
