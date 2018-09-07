import { svg } from '../../src'

const fixedSvg = svg({
  height: 100,
  width: 100,
  content: '\n  <example />\n',
  stretch: false,
})

console.log(fixedSvg)