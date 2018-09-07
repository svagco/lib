import { equal, ok, throws } from 'zoroaster/assert'
import Context from '../context'
import { makeElement } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  async 'throws when no options are passed'() {
    await throws({
      fn: makeElement,
      message: 'Options were not passed.',
    })
  },
  async 'throws when no element is passed'() {
    await throws({
      fn: makeElement,
      args: [{}],
      message: 'Expected to see an element name.',
    })
  },
  'can create a new element'() {
    const el = makeElement({
      name: 'test',
    })
    equal(el, '<test/>')
  },
  'can create a new element with content'({ content }) {
    const el = makeElement({
      name: 'test',
      content,
    })
    equal(el, `<test>${content}</test>`)
  },
  'can create a new element with attributes'() {
    const el = makeElement({
      name: 'test',
      attributes: {
        test: true,
        'font-color': 'green',
      },
    })
    equal(el, '<test test="true" font-color="green"/>')
  },
  'ignores undefined attributes'() {
    const el = makeElement({
      name: 'test',
      attributes: {
        test: true,
        'font-color': 'green',
        width: undefined,
        height: undefined,
      },
    })
    equal(el, '<test test="true" font-color="green"/>')
  },
  'can create a new element with attributes and content'({ content }) {
    const el = makeElement({
      name: 'test',
      attributes: {
        test: true,
        'font-color': 'green',
      },
      content,
    })
    equal(el, `<test test="true" font-color="green">${content}</test>`)
  },
}

export default T