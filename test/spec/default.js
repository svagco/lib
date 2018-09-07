import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import lib from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof lib, 'function')
  },
  async 'calls package without error'() {
    await lib()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await lib({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T