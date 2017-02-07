## Usage
#### Gradient, but actually, not quite gradient
```js
const { gradient } = require('abcolor');

gradient(89, {
  model: 'rgb',
  from: '5fe4bd',
  to: 'fbc939'
});
// Result: array of RGB values [233.84, 203.97, 71.52]
```
  - **`percent`**- **Required**, [numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1)
  - **`options`**- Optional, object
  
    `model:` String, can be `rgb` or `hsl`. `Hsl` by default,

    `from:` String (Hex) / array (RGB) / [numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1) (Hex). 0% color. [`#FF4C4C`](http://www.colorhexa.com/ff4c4c) by default,

    `to:` String (Hex) / array (RGB) / [numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1) (Hex). 100% color. [`#66BB6A`](http://www.colorhexa.com/66bb6a) by default.

#### Conversions
##### Hex to RGB
```js
const { hexToRgb } = require('abcolor');

hexToRgb('#94f');
// Result - array of RGB values: [153, 68, 255]
```
The argument should be a six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#). Or not.

##### RGB to HSL
```js
const { rgbToHsl } = require('abcolor');

rgbToHsl([153, 68, 255]);
// Result: array of HSL values [267.27, 100, 63.33]
```
The argument should be an array of RGB values (0 - 255 each).
