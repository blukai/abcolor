const test = require('ava');

const { hexToRgb } = require('../');
const colors = require('../src/colors');

test('3-char without #', t => t.deepEqual(
  hexToRgb(colors.tri.hex),
  colors.tri.rgb
));

test('6-char with #', t => t.deepEqual(
  hexToRgb(`#${colors.six.hex}`),
  colors.six.rgb
));

test('6-char without # in % format', t => t.deepEqual(
  hexToRgb(colors.six.hex, true),
  colors.six.rgbPercent
));

test('should throw an err if 1st param (Hex) is wrong', t => t.throws(
  () => hexToRgb(null)
));

test('should throw an err if 2st param (Percent) is wrong', t => t.throws(
  () => hexToRgb(colors.h3, 'percent')
));
