import { writeFileSync } from 'fs'
import { svg } from '../../src'
import { marker } from '../lib/marker'
/* start example */
import { roundedCorner } from '../../src'

const C = roundedCorner({
  x: 1,
  y: 60,
}, {
  x: 51,
  y: 10,
}, true)
/* end example */
console.log(C)
const image = svg({
  width: 61,
  height: 61,
  stretch: false,
  content: `${marker}<path marker-end="url(#arrow)" fill="none" stroke="#463961" stroke-width="2" d="M1,60 ${C}"/>`,
})

writeFileSync('images/corners/abottom-right.svg', image)