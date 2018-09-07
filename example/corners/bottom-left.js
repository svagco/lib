import { writeFileSync } from 'fs'
import { svg } from '../../src'
/* start example */
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 51,
  y: 50,
}, {
  x: 1,
  y: 0,
})
/* end example */
console.log(C)
const image = svg({
  width: 51,
  height: 51,
  stretch: false,
  content: `<path fill="none" stroke="#463961" stroke-width="2" d="M51,50 ${C}"/>`,
})

writeFileSync('images/corners/bottom-left.svg', image)