const test = require('ava');

const { gradient } = require('../');
const colors = require('../src/colors');

// default options
test('default 10%', t => t.deepEqual(
  gradient(10),
  [12, 100, 50]
));
test('default 83%', t => t.deepEqual(
  gradient(83),
  [99.6, 100, 50]
));

test('56%, model: rgb', t => t.deepEqual(
  gradient(56, { model: 'rgb' }),
  [112.2, 142.8, 0]
));

test('19%, model: RGB, from: colors.tri.hex', t => t.deepEqual(
  gradient(19, { model: 'RGB', from: colors.tri.hex }),
  [206.55, 199.92, 0]
));

test('45%, to: colors.six.hex', t => t.deepEqual(
  gradient(45, { to: colors.six.rgb }),
  [89.96, 100, 48.76]
));

test('15%, model: rgb, from: colors.green.rgb to: colors.red.rgb', t => t.deepEqual(
  gradient(15, { model: 'rgb', from: colors.green.rgb, to: colors.red.rgb }),
  [38.25, 216.75, 0]
));

test('51%, model: hsl, from: colors.green.hex to: colors.red.hex', t => t.deepEqual(
  gradient(51, { model: 'hsl', from: colors.green.hex, to: colors.red.hex }),
  [58.8, 100, 50]
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
