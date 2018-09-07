import { writeFileSync } from 'fs'
import { svg } from '../../src'
/* start example */
import { roundedCorner } from '../../src'

const C = roundedCorner({ x: 10, y: 0 }, { x: 0, y: 10 })
console.log(C)
/* end example */
const image = svg({
  width: 10,
  height: 10,
  stretch: false,
  content: `<path fill="#D3D3D3">M10,0 ${C}</path>`,
})

writeFileSync('images/corners/top-right.svg', image)