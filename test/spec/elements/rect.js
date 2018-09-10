import { equal } from 'zoroaster/assert'
import Context from '../../context'
import { rect } from '../../../src/elements'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'creates a rect element'() {
    const a = {
      width: 100,
      height: 100,
      rx: 5,
      ry: 5,
    }
    const res = rect(a)
    equal(res, `<rect width="${a.width}" height="${a.height}" rx="${a.rx}" ry="${a.ry}"/>`)
  },
}

export default T