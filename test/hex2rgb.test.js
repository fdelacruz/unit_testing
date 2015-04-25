var hex2rgb = require('../lib/hex2rgb');
var assert = require('assert');

describe('hex2rgb', function() {
	it('should throw an error if the value is not a hex number', function() {
		assert.throws(function() {
			hex2rgb('blue');
		}, /Invalid hexadecimal number/);
	});

	it('should return a correctly converted rgb value', function() {

		var rgb = hex2rgb("#fff");
		assert.deepEqual(rgb, [255, 255, 255]);
	});
});
