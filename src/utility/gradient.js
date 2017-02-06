const { isNumeric, aHex, aTri } = require('../utility');
const colors = require('../colors');
const { hexToRgb, rgbToHsl } = require('../../');

const gradient = (percent, conversion = 'rgb', from = colors.tri.hex, to = colors.six.hex) => {
  if (percent && isNumeric(percent)) {
    if (from && to) {
      let a = null;
      if (aHex(from)) {
        a = hexToRgb(from);
      } else if (aTri(from)) {
        a = from;
      }

      let b = null;
      if (aHex(to)) {
        b = hexToRgb(to);
      } else if (aTri(to)) {
        b = to;
      }

      if (aTri(a) && aTri(b)) {
        const conv = conversion.toLowerCase();

        if (conv === 'hsl') {
          a = rgbToHsl(a);
          b = rgbToHsl(b);
        }

        const diff = a.map((val, i) =>
          (Math.abs(b[i] - a[i]) * percent) / 100
        );
        const color = diff.map((val, i) =>
          Number((a[i] > b[i] ? a[i] - val : a[i] + val).toFixed(2))
        );

        return color;
      }

      throw new Error('Something wrong with colors');
    }

    throw new Error('Check color values');
  }

  throw new Error('Wrong 1st param (percent must be a number)');
};

module.exports = gradient;

console.log(gradient(90, 'hsl'));
