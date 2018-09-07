import { minify } from '../src'

const svg = `
<g>
  <circle fill="#FF5F52" cx="5" cy="5" r="5.25"/>
  <circle stroke="#E33E32" stroke-width="1" cx="5" cy="5" r="5.5"/>
</g>
<g>
  <circle fill="#FFBE05" cx="25" cy="5" r="5.25"/>
  <circle stroke="#E2A100" stroke-width="1" cx="25" cy="5" r="5.5"/>
</g>
<g>
  <circle fill="#15CC35" cx="45" cy="5" r="5.25"/>
  <circle stroke="#17B230" stroke-width="1" cx="45" cy="5" r="5.5"/>
</g>
`

const minified = minify(svg)
console.log(minified)