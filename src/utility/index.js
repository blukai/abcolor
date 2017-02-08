const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const hashChar = (str) => {
  if (str.charAt(0) === '#') {
    return str.slice(1);
  }

  return str;
};

const aHex = str => /^#?([0-9a-f]{3}){1,2}$/i.test(str);

// RGB, HSL, HSV(HSB) are consists of three numbers, Tri means three :)
const aTri = arr => Array.isArray(arr)
  && arr.length === 3
  && arr.every(val => isNumeric(val));

const lc = str => str.toLowerCase();

module.exports = {
  isNumeric,
  hashChar,
  aHex,
  aTri,
  lc
};
