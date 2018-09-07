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

## TODO

- [ ] Create an alias for each SVG element, e.g., `circle`, `rect`, _etc_.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
