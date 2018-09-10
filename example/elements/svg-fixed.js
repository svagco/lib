/* start example */
import { svg } from '../../src'

const fixedSvg = svg({
  height: 100,
  width: 100,
  content: '<example />',
  stretch: false,
})
/* end example */

console.log(fixedSvg)