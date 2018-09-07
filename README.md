# @svag/lib

[![npm version](https://badge.fury.io/js/%40svag%2Flib.svg)](https://npmjs.org/package/@svag/lib)

`@svag/lib` is a library for drawing SVGs with common methods. It is used in other `svag` packages, e.g., [`@svag/terminal`](https://github.com/svagjs/terminal)

```sh
yarn add -E @svag/lib
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`makeElement(options: MakeElementOptions): string`](#makeelementoptions-makeelementoptions-string)
    * [`MakeElementOptions`](#makeelementoptions)
  * [`roundedCorner(from: Coordinate, to: Coordinate, anticlockwise?: boolean): string`](#roundedcornerfrom-coordinateto-coordinateanticlockwise-boolean-string)
    * [`Coordinate`](#coordinate)
    * [Clockwise](#clockwise)
    * [Anticlockwise](#anticlockwise)
- [Elements](#elements)
  * [`svg(options: SVGOption): string`](#svgoptions-svgoption-string)
    * [`SVGOptions`](#svgoptions)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package library exports a number of functions, including `makeElement` and `minify`.

```js
import { makeElement, minify } from '@svag/lib'
```

### `makeElement(`<br/>&nbsp;&nbsp;`options: MakeElementOptions,`<br/>`): string`

This function will create an element as a string given the options.

__<a name="makeelementoptions">`MakeElementOptions`</a>__: Options to make a new element.

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __name*__ | _string_ | The name of the new element element. | - |
| content | _string_ | The content to write inside of the element. | - |
| attributes | _object_ | A map of attributes to add to the element. | - |

```js
import { makeElement } from '@svag/lib'

const circle = makeElement({
  name: 'circle',
  attributes: {
    cx: 50,
    cy: 50,
    r: 25,
  },
})
const element = makeElement({
  name: 'rect',
  attributes: {
    test: true,
    'font-size': '12px',
  },
  content: circle,
})

console.log(element)
```

```svg
<rect test="true" font-size="12px"><circle cx="50" cy="50" r="25"/></rect>
```

### `roundedCorner(`<br/>&nbsp;&nbsp;`from: Coordinate,`<br/>&nbsp;&nbsp;`to: Coordinate,`<br/>&nbsp;&nbsp;`anticlockwise?: boolean,`<br/>`): string`

Create a `C` directive to include in a `path` element to create a rounded corner. If `anticlockwise` argument is passed, the path will follow the counter-clockwise movement.

__<a name="coordinate">`Coordinate`</a>__: A coordinate used for drawing.

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __x*__ | _number_ | The `x` position of the coordinate. | - |
| __y*__ | _number_ | The `y` position of the coordinate. | - |

<a name="clockwise">Clockwise</a>: The table below shows the corners drawn clockwise.

<table>
 <thead>
  <tr>
   <th>Direction</th>
   <th>Usage</th>
   <th>Output</th>
   <th>Preview</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Top Right</td>
   <td>

```js
import { roundedCorner } from '../../src'
const C = roundedCorner({
  x: 0,
  y: 1,
}, {
  x: 50,
  y: 51,
})
```
  </td>
   <td>

```svg
C 25 1, 50 26, 50 51
```
  </td>
   <td>

![top-right](images/corners/top-right.svg)
</td>
  </tr>
  <tr>
   <td>Bottom Right</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 60,
  y: 0,
}, {
  x: 10,
  y: 50,
})
```
   </td>
   <td>

```svg
C 60 25, 35 50, 10 50
```
  </td>
   <td>

![bottom-right](images/corners/bottom-right.svg)
</td>
  </tr>
  <tr>
   <td>Bottom Left</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 60,
  y: 60,
}, {
  x: 10,
  y: 10,
})
```
   </td>
   <td>

```svg
C 35 60, 10 35, 10 10
```
</td>
   <td>

![bottom-left](images/corners/bottom-left.svg)
</td>
  </tr>
  <tr>
   <td>Top Left</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 1,
  y: 60,
}, {
  x: 51,
  y: 10,
})
```
   </td>
   <td>

```svg
C 1 35, 26 10, 51 10
```
</td>
   <td>

![top-left](images/corners/top-left.svg)
</td>
  </tr>
 </tbody>
</table>

<a name="anticlockwise">Anticlockwise</a>: The table below shows the corners drawn anticlockwise.

<table>
 <thead>
  <tr>
   <th>Direction</th>
   <th>Usage</th>
   <th>Output</th>
   <th>Preview</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Top Right</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 60,
  y: 60,
}, {
  x: 10,
  y: 10,
}, true)
```
  </td>
   <td>

```svg
C 60 35, 35 10, 10 10
```
  </td>
   <td>

![anticlockwise top-right](images/corners/atop-right.svg)
</td>
  </tr>
  <tr>
   <td>Top Left</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 60,
  y: 1,
}, {
  x: 10,
  y: 51,
}, true)
```
   </td>
   <td>

```svg
C 35 1, 10 26, 10 51
```
</td>
   <td>

![anticlockwise top-left](images/corners/atop-left.svg)
</td>
  </tr>
  <tr>
   <td>Bottom Left</td>
   <td>

```js
import { roundedCorner } from '../../src'
const C = roundedCorner({
  x: 1,
  y: 0,
}, {
  x: 51,
  y: 50,
}, true)
```
   </td>
   <td>

```svg
C 1 25, 26 50, 51 50
```
</td>
   <td>

![anticlockwise bottom-left](images/corners/abottom-left.svg)
</td>
  </tr>
  <tr>
   <td>Bottom Right</td>
   <td>

```js
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 1,
  y: 60,
}, {
  x: 51,
  y: 10,
}, true)
```
   </td>
   <td>

```svg
C 26 60, 51 35, 51 10
```
  </td>
   <td>

![anticlockwise bottom-right](images/corners/abottom-right.svg)
</td>
  </tr>
 </tbody>
</table>

## Elements

This section describes how to create individual elements.

### `svg(`<br/>&nbsp;&nbsp;`options: SVGOption,`<br/>`): string`

Generate an `svg` element with given content and dimensions.

__<a name="svgoptions">`SVGOptions`</a>__: An option for creating an svg.

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __width*__ | _number_ | The width of the `svg`. | - |
| __height*__ | _number_ | The height of the `svg`. | - |
| __content*__ | _string_ | The content to put inside of the `svg`. | - |
| stretch | _boolean_ | Expand the `svg` to the width of the container by not setting `width` and `height` attributes. | `true` |

```js
import { svg } from '../../src'

const stretchedSvg = svg({
  height: 100,
  width: 100,
  content: '\n  <example />\n',
})

console.log(stretchedSvg)
```

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 100, 100">
  <example />
</svg>
```

To generate an `svg` which will not adjust its size to the viewport, the `stretch` option needs to be set to `false`.

```js
import { svg } from '../../src'

const fixedSvg = svg({
  height: 100,
  width: 100,
  content: '\n  <example />\n',
  stretch: false,
})

console.log(fixedSvg)
```

```xml
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 100, 100" width="100px" height="100px">
  <example />
</svg>
```

## TODO

- [ ] Create an alias for each SVG element, e.g., `circle`, `rect`, _etc_.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
