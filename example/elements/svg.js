import { svg } from '../../src'

const stretchedSvg = svg({
  height: 100,
  width: 100,
  content: '\n  <example />\n',
})

console.log(stretchedSvg)
