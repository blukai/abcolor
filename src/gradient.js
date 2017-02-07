const { isNumeric, aHex, aTri } = require('./utility');
const colors = require('./colors');
const hexToRgb = require('./conversions/hexToRgb');
const rgbToHsl = require('./conversions/rgbToHsl');

module.exports = (percent, options) => {
  if (percent && isNumeric(percent)) {
    if (!options || typeof options === 'object') {
      const o = {};
      o.model = options && options.model && /^(rgb|hsl)$/.test(options.model) ? options.model : 'hsl';

      const color = (stage) => {
        let res = (stage === 'from' && colors.red[o.model]) || (stage === 'to' && colors.green[o.model]);

        if (options && options[stage]) {
          res = options[stage];

          if (aHex(res)) {
            res = hexToRgb(res);
          }
          if (aTri(res) && o.model === 'hsl') {
            res = rgbToHsl(res);
          }
        }

        return res;
      };

      o.from = color('from');
      o.to = color('to');

      const { from, to } = o;

      // Get color depends on given percent
      const diff = from.map((val, i) =>
        (Math.abs(to[i] - from[i]) * percent) / 100
      );
      const res = diff.map((val, i) =>
        Number((from[i] > to[i] ? from[i] - val : from[i] + val).toFixed(2))
      );

      return res;
    }

    throw new TypeError('Wrong 2nd param (Options must be an object)');
  }

  throw new TypeError('Wrong 1st param (Percent must be a number)');
};
