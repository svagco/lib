import { writeFileSync } from 'fs'
import { svg } from '../../src'
/* start example */
import { roundedCorner } from '../../src'
const C = roundedCorner({
  x: 0,
  y: 1,
}, {
  x: 50,
  y: 51,
})
/* end example */
console.log(C)
const image = svg({
  width: 51,
  height: 51,
  stretch: false,
  content: `<path fill="none" stroke="#463961" stroke-width="2" d="M0,1 ${C}"/>`,
})

writeFileSync('images/corners/top-right.svg', image)