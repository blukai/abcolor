![abcolor](header.png)
[![Build Status](https://travis-ci.org/blukai/abcolor.svg?branch=master)](https://travis-ci.org/blukai/abcolor)

🎨 Color conversion and tool, that helps to visualize some data.

Looking for example to use abcolor? Head over to [opendota.com](https://www.opendota.com/heroes).

## Installation

`npm install --save abcolor`

## Usage
### Gradient
But actually, not quite gradient
```js
import { gradient } from 'abcolor';

gradient(89, {
  model: 'rgb',
  from: '5fe4bd',
  to: 'fbc939',
  css: true
});
// Result: rgb(234,204,72)
```
  - **`percent`**- Required, numeric[*](#numeric---string-number--number)
  - **`options`**- Optional, object
    - `model:` String, can be `rgb` or `hsl`. `Hsl` by default
    - `from:` String / numeric[*](#numeric---string-number--number) / array (RGB), 0% color. [`Red`](http://www.colorhexa.com/ff0000) by default
    - `to:` String / numeric[*](#numeric---string-number--number) / array (RGB), 100% color. [`Green`](http://www.colorhexa.com/00ff00) by default
    - `css:` Boolean, `False` by default

### Conversions
#### Hex to RGB
```js
import { hexToRgb } from 'abcolor';

hexToRgb('#94f');
// Result: array of RGB values - [153, 68, 255]

hexToRgb('#94f', true);
// Result: array of RGB Percent values - [60, 26.67, 100]

hexToRgb('#94f', null, true);
// Result: rgb(153,68,255)
```
  - **`hexadecimal`**- Required, string / number. Six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#), or not
  - **`percent`**- Optional, boolean, `False` by default
  - **`css`**- Optional, boolean, `False` by default

#### Hex to HSL
```js
import { hexToHsl } from 'abcolor';

hexToHsl('00a1f1')
// Result: array of HSL values - [199.92, 100, 47.25]

hexToHsl('00a1f1', true)
// Result: hsl(199.92,100%,47.25%)
```
  - **`hexadecimal`**- Required, string / number. Six-digit (9000f0) or three-digit (94f) Hex triplet. It can begins from hash char (#), or not.
  - **`css`**- Optional, boolean, `False` by default

#### RGB to HSL
```js
import { rgbToHsl } from 'abcolor';

rgbToHsl([153, 68, 255]);
// Result: array of HSL values - [267.27, 100, 63.33]

rgbToHsl([153, 68, 255], true);
// Result: hsl(267.27,100%,63.33%)
```
  - **`rgb`**- Required, array. Array of RGB values (0 - 255 range)
  - **`css`**- Optional, boolean, `False` by default

###### [Numeric](https://github.com/blukai/abcolor/blob/master/src/utility/index.js#L1)* - string-number / number
