/* start example */
import { makeElement } from '../src'

const circle = makeElement({
  name: 'circle',
  attributes: {
    cx: 50,
    cy: 50,
    r: 25,
  },
})
const rect = makeElement({
  name: 'rect',
  attributes: {
    width: '100',
    height: '100',
  },
})
const g = makeElement({
  name: 'g',
  attributes: {
    fill: 'green',
  },
  // 1. SET Single content attribute
  content: rect,
})
const element = makeElement({
  name: 'g',
  attributes: {
    test: true,
    'font-size': '12px',
  },
  // 2. SET Multiple content attributes
  content: [circle, g],
})
/* end example */

console.log(element)