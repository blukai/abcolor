'use strict';

const hexToRgb = require('./hexToRgb');
const rgbToHsl = require('./rgbToHsl');

const hexToHsl = (hexadecimal, css = false) => rgbToHsl(
  hexToRgb(hexadecimal), css === true && true
);

module.exports = hexToHsl;
