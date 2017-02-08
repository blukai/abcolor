const hexToRgb = require('./hexToRgb');
const rgbToHsl = require('./rgbToHsl');

const hexToHsl = hexadecimal => rgbToHsl(hexToRgb(hexadecimal));

module.exports = hexToHsl;
