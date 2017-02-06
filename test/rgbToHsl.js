const test = require('ava');

const { rgbToHsl } = require('../');
const colors = require('../src/colors');

test('rgb integer', t => t.deepEqual(
  rgbToHsl(colors.tri.rgb),
  colors.tri.hsl
));

test('rgb decimal', t => t.deepEqual(
  rgbToHsl(colors.six.rgb),
  colors.six.hsl
));

test('should throw an err if input is not an array', t => t.throws(
  () => rgbToHsl(colors.six.rgb.join(','))
));
