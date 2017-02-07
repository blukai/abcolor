const test = require('ava');

const { gradient } = require('../');
const colors = require('../src/colors');

// default options
test('default 10%', t => t.deepEqual(
  gradient(10),
  [12.28, 93.85, 64.08]
));
test('default 83%', t => t.deepEqual(
  gradient(83),
  [101.94, 48.92, 58.07]
));

test('56%, model: rgb', t => t.deepEqual(
  gradient(56, { model: 'rgb' }),
  [169.32, 138.16, 92.8]
));

test('19%, model: rgb, from: colors.tri.hex', t => t.deepEqual(
  gradient(19, { model: 'rgb', from: colors.tri.hex }),
  [225.93, 187, 20.14]
));

test('45%, to: colors.six.hex', t => t.deepEqual(
  gradient(45, { to: colors.six.rgb }),
  [89.96, 100, 56.96]
));

test('15%, model: rgb, from: colors.green.rgb to: colors.red.rgb', t => t.deepEqual(
  gradient(15, { model: 'rgb', from: colors.green.rgb, to: colors.red.rgb }),
  [124.95, 170.35, 101.5]
));

test('51%, model: hsl, from: colors.green.hex to: colors.red.hex', t => t.deepEqual(
  gradient(51, { model: 'hsl', from: colors.green.hex, to: colors.red.hex }),
  [60.18, 69.85, 60.87]
));

// Throws
test('should throw an err if params are empty', t => t.throws(
  () => gradient()
));
test('should throw an err if 1st param (Percent) is not numeric', t => t.throws(
  () => gradient('ten')
));
test('should throw an err if 2nd param (Options) is not an object', t => t.throws(
  () => gradient(10, 'rgb')
));
