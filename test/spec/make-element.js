import { equal, throws } from 'zoroaster/assert'
import Context from '../context'
import makeElement, { makeAttrs } from '../../src/lib/make-element'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  async 'throws when no options are passed'() {
    await throws({
      fn: makeElement,
      message: 'The element name was not passed.',
    })
  },
  'can create a new element'() {
    const el = makeElement('test')
    equal(el, '<test/>')
  },
  'can create a new element with content'({ content }) {
    const el = makeElement('test', {
      content,
    })
    equal(el, `<test>
  ${content}
</test>`)
  },
  'can create a new element with attributes'() {
    const el = makeElement('test', {
      attributes: {
        test: true,
        'font-color': 'green',
      },
    })
    equal(el, '<test test="true" font-color="green"/>')
  },
  'ignores undefined attributes'() {
    const el = makeElement('test', {
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
    const el = makeElement('test', {
      name: 'test',
      attributes: {
        test: true,
        'font-color': 'green',
      },
      content,
    })
    equal(el, `<test test="true" font-color="green">
  ${content}
</test>`)
  },
  'creates new element with array content'({ content }) {
    const el = makeElement('test', {
      content: [content, content],
    })
    equal(el, `<test>
  ${content}
  ${content}
</test>`)
  },
  'creates new element with array content with new lines'({ content }) {
    const t = makeElement('t', {
      content: [content, content],
    })
    const el = makeElement('test', {
      content: t,
    })
    equal(el, `<test>
  <t>
    ${content}
    ${content}
  </t>
</test>`)
  },
}

const MakeAttrs = {
  'makes attributes with new lines'() {
    const res = makeAttrs({
      hello: 'world',
      world: 'hello '.repeat(10).trim(),
      test: 'test '.repeat(20).trim(),
      test2: 'test2 '.repeat(20).trim(),
      test3: 'test3 '.repeat(20).trim(),
    }, 'el')
    equal(res, ` hello="world" world="hello hello hello hello hello hello hello hello hello hello"
    test="test test test test test test test test test test test test test test test test test test test test"
    test2="test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2"
    test3="test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3"`)
  },
}

export default T

export { MakeAttrs }