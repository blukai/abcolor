# ![abcolor](header.png)
## Usage
#### Gradient
But actually, not quite gradient
```js
const { gradient } = require('abcolor');

gradient(89, {
  model: 'rgb',
  from: '5fe4bd',
  to: 'fbc939'
});
// Result: array of RGB values [233.84, 203.97, 71.52]
```
  - **`percent`**- Required, numeric*
  - **`options`**- Optional, object
    - `model:` String, can be `rgb` or `hsl`. `Hsl` by default
    - `from:` String (Hex) / array (RGB) / numeric* (Hex). [`Red`](http://www.colorhexa.com/ff0000) by default
    - `to:` String (Hex) / array (RGB) / numeric* (Hex). 100% color. [`Green`](http://www.colorhexa.com/00ff00) by default

#### Conversions
```js
const { hexToRgb, rgbToHsl, hexToHsl } = require('abcolor');

hexToRgb('#94f');
// Result: array of RGB values - [153, 68, 255]

rgbToHsl([153, 68, 255]);
// Result: array of HSL values - [267.27, 100, 63.33]

hexToHsl('00a1f1');
// Result: array of HSL values - [199.92, 100, 47.25]
```
The argument for **`hexToRgb`** should be a six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#). Or not.

The argument for **`rgbToHsl`** should be an array of RGB values (0 - 255 each).

[Numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1)* - string-number / number