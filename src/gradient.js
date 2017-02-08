const { isNumeric, aHex, aTri, lc } = require('./utility');
const colors = require('./colors');
const hexToRgb = require('./conversions/hexToRgb');
const rgbToHsl = require('./conversions/rgbToHsl');

module.exports = (percent, options) => {
  if (percent && isNumeric(percent)) {
    if (!options || typeof options === 'object') {
      const o = {};

      o.model = options && options.model
        && /^(rgb)$/.test(lc(options.model))
        ? lc(options.model)
        : 'hsl';

      const processСolor = (stage) => {
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

      o.from = processСolor('from');
      o.to = processСolor('to');

      const { from, to } = o;

      // Get color depends on given percent
      const diff = from.map((val, i) =>
        (Math.abs(to[i] - from[i]) * percent) / 100
      );
      const color = diff.map((val, i) =>
        Number((from[i] > to[i] ? from[i] - val : from[i] + val).toFixed(o.model === 'rgb' ? 0 : 2))
      );

      // Transform into css
      o.css = options && options.css && options.css === true;

      let result = color;

      if (o.css === true) {
        if (o.model === 'hsl') {
          result = `hsl(${color.map((val, i) => (i > 0 ? `${val}%` : val))})`;
        } else if (o.model === 'rgb') {
          result = `rgb(${color.join()})`;
        }
      }

      return result;
    }

    throw new TypeError('Wrong 2nd param (Options must be an object)');
  }

  throw new TypeError('Wrong 1st param (Percent must be a number)');
};
