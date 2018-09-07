import { equal } from 'zoroaster/assert'
import Context from '../context'
import { roundedCorner } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  clockwise: {
    'bottom-right'() {
      const res = roundedCorner({ x: 100, y: 0 }, { x: 90, y: 10 })
      equal(res, 'C 100 5, 95 10, 90 10')
    },
    'bottom-left'() {
      const res = roundedCorner({ x: 10, y: 10 }, { x: 0, y: 0 })
      equal(res, 'C 5 10, 0 5, 0 0')
    },
    'top-left'() {
      const res = roundedCorner({ x: 0, y: 10 }, { x: 10, y: 0 })
      equal(res, 'C 0 5, 5 0, 10 0')
    },
    'top-right'() {
      const res = roundedCorner({ x: 0, y: 0 }, { x: 10, y: 10 })
      equal(res, 'C 5 0, 10 5, 10 10')
    },
  },
}

export default T