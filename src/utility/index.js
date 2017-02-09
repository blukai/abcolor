'use strict';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const hashChar = str => (str.charAt(0) === '#' ? str.slice(1) : str);

const aHex = str => /^#?([0-9a-f]{3}){1,2}$/i.test(str);

// RGB, HSL, HSV(HSB) are consists of three numbers, Tri means three :)
const aTri = arr => Array.isArray(arr)
  && arr.length === 3
  && arr.every(val => isNumeric(val));

const lc = str => str.toLowerCase();

const formatRgb = (arr, percent = false) => aTri(arr) && (
  percent === true
    ? `rgb(${arr.map(val => `${val}%`)})`
    : `rgb(${arr.join()})`
);

const formatHsl = arr => aTri(arr) && `hsl(${
  arr.map((val, i) => (i > 0 ? `${val}%` : val))
})`;

module.exports = {
  isNumeric,
  hashChar,
  aHex,
  aTri,
  lc,
  formatRgb,
  formatHsl
};
