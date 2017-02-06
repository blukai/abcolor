const { hashChar, aHex } = require('../utility');

const hexToRgb = (hexadecimal, percent = false) => {
  if (hexadecimal) {
    // Remove hash char
    let hex = hashChar(hexadecimal);

    if (aHex(hex)) {
      if (typeof percent === 'boolean') {
        // Convert 3-char hex into a 6-char
        if (hex.length === 3) {
          hex = [...hex]
            .map(c => c.repeat(2))
            .join('');
        }

        const bigint = parseInt(hex, 16);
        let rgb = [
          (bigint >> 16) & 255, // R
          (bigint >> 8) & 255, // G
          bigint & 255 // B
        ];

        // Convert decimal into percent
        if (percent === true) {
          rgb = rgb.map(val =>
            Number(((val * 100) / 255).toFixed(2))
          );
        }

        return rgb;
      }

      throw new Error('Percent must be boolean');
    }

    throw new Error('Hex must be a string or number');
  }
  throw new Error('Something wrong with given hex value');
};

module.exports = hexToRgb;
