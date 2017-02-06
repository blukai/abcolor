const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

module.exports = {
  isNumeric
};
