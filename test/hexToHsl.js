const test = require('ava');

const { hexToHsl } = require('../');
const colors = require('../src/colors');

test('3-char without #', t => t.deepEqual(
  hexToHsl(colors.tri.hex),
  colors.tri.hsl
));
