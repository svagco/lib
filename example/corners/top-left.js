import { writeFileSync } from 'fs'
import { svg } from '../../src'
/* start example */
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 1,
  y: 51,
}, {
  x: 51,
  y: 1,
})
/* end example */
console.log(C)
const image = svg({
  width: 51,
  height: 51,
  stretch: false,
  content: `<path fill="none" stroke="#463961" stroke-width="2" d="M1,51 ${C}"/>`,
})

writeFileSync('images/corners/top-left.svg', image)