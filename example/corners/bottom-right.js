import { writeFileSync } from 'fs'
import { svg } from '../../src'
/* start example */
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 50,
  y: 0,
}, {
  x: 0,
  y: 50,
})
/* end example */
console.log(C)
const image = svg({
  width: 51,
  height: 51,
  stretch: false,
  content: `<path fill="none" stroke="#463961" stroke-width="2" d="M50,0 ${C}"/>`,
})

writeFileSync('images/corners/bottom-right.svg', image)