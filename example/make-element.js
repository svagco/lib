import { makeElement } from '../src'

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