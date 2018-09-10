/* start example */
import { makeElement } from '../src'

const circle = makeElement('circle', {
  attributes: {
    cx: 50,
    cy: 50,
    r: 25,
  },
})
const rect = makeElement('rect', {
  attributes: {
    width: '100',
    height: '100',
  },
})
const g = makeElement('g', {
  attributes: {
    fill: 'green',
  },
  // 1. SET Single content attribute
  content: rect,
})
const element = makeElement('g', {
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