import { equal } from 'zoroaster/assert'
import Context from '../context'
import { minify } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'can minify the svg'() {
    const res = minify(`<rect>
    <rect>    </rect>
    </rect>`)
    equal(res, '<rect><rect></rect></rect>')
  },
}

export default T