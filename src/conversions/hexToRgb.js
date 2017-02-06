const hexToRgb = (hexadecimal, percent) => {
  let hex = hexadecimal;

  // Remove hash char
  if (hex.charAt(0) === '#') {
    hex = hex.slice(1);
  }
  // Convert 3-char hex into a 6-char
  if (hex.length === 3) {
    hex = [...hex]
      .map(c => c.repeat(2))
      .join('');
  }

  const bigint = parseInt(hex, 16);
  let rgb = [
    (bigint >> 16) & 255, // R
    (bigint >> 8) & 255, // G
    bigint & 255 // B
  ];

  // Convert decimal into percent
  if (percent === true) {
    rgb = rgb.map(val => Number(((val * 100) / 255).toFixed(2)));
  }

  return rgb;
};

module.exports = hexToRgb;
