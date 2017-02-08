const test = require('ava');

const { rgbToHsl } = require('../');
const colors = require('../src/colors');
const { formatHsl } = require('../src/utility');

test('rgb array', t => t.deepEqual(
  rgbToHsl(colors.tri.rgb),
  colors.tri.hsl
));

test('rgb array, css', t => t.deepEqual(
  rgbToHsl(colors.red.rgb, true),
  formatHsl(colors.red.hsl)
));

test('should throw an err if input is not an array', t => t.throws(
  () => rgbToHsl(colors.six.rgb.join(','))
));
