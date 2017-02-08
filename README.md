![abcolor](header.png)
## Usage 
### Gradient
But actually, not quite gradient
```js
const { gradient } = require('abcolor');

gradient(89, {
  model: 'rgb',
  from: '5fe4bd',
  to: 'fbc939',
  css: true
});
// Result: rgb(234,204,72)
```
  - **`percent`**- Required, numeric*
  - **`options`**- Optional, object
    - `model:` String, can be `rgb` or `hsl`. `Hsl` by default
    - `from:` String (Hex) / array (RGB) / numeric[*](#numeric---string-number--number) (Hex). [`Red`](http://www.colorhexa.com/ff0000) by default
    - `to:` String (Hex) / array (RGB) / numeric[*](#numeric---string-number--number) (Hex). 100% color. [`Green`](http://www.colorhexa.com/00ff00) by default
    - `css:` Boolean, `False` by default

### Conversions
#### Hex to RGB
```js
const { hexToRgb } = require('abcolor');

hexToRgb('#94f');
// Result: array of RGB values - [153, 68, 255]

hexToRgb('#94f', true);
// Result: array of RGB Percent values - [60, 26.67, 100]
```
  - **`hexadecimal`**- Required, numeric[*](#numeric---string-number--number). Six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#), or not.
  - **`percent`**- Optional, boolean, `False` by default.

#### Hex to HSL
```js
const { hexToHsl } = require('abcolor');

hexToHsl('00a1f1')
// Result: array of HSL values - [199.92, 100, 47.25]
```
  - **`hexadecimal`**- Required, numeric[*](#numeric---string-number--number). Six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#), or not.

#### RGB to HSL
```js
const { rgbToHsl } = require('abcolor');

rgbToHsl([153, 68, 255]);
// Result: array of HSL values - [267.27, 100, 63.33]
```
  - **`rgb`**- Required, array. Array of RGB values (0 - 255 range)

###### [Numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1)* - string-number / number