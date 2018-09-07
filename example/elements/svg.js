import { svg } from '../../src'

const stretchedSvg = svg({
  height: 100,
  width: 100,
  content: '<example />',
})

const fixedSvg = svg({
  height: 100,
  width: 100,
  content: '<example />',
  stretch: false,
})

console.log(stretchedSvg)
console.log('\n====\n')
console.log(fixedSvg)