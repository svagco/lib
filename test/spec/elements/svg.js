import { equal, ok, throws } from 'zoroaster/assert'
import Context from '../../context'
import { svg } from '../../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'creates an svg element'({ content }) {
    const res = svg({
      content,
      height: 100,
      width: 100,
    })
    equal(res, `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 100, 100">
  ${content}
</svg>`)
  },
  'creates an svg element without stretch'({ content }) {
    const res = svg({
      content,
      height: 100,
      width: 100,
      stretch: false,
    })
    equal(res, `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 100, 100" width="100px" height="100px">
  ${content}
</svg>`)
  },
}

export default T