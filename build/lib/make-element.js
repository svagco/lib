/**
 * Create a new element.
 * @param {string} name The name of the new element.
 * @param {MakeElementOptions} [options] Options to make a new element.
 * @param {string|string[]} [options.content] The content to write inside of the element, such as string or an array of strings.
 * @param {object} [options.attributes] A map of attributes to add to the element.
 */
       const makeElement = (name, options = {}) => {
  if (!name) throw new Error('The element name was not passed.')
  const {
    content, attributes = {},
  } = options
  const attrs = makeAttrs(attributes, name)
  const c = makeContent(content)
  const res = wrap(name, attrs, c)
  return res
}

       const makeAttrs = (attributes, name) => {
  const indentLength = name.length + 2 // e.g., `<svg
  const i = ' '.repeat(indentLength)
  const attrs = Object.keys(attributes)
    .filter((key) => {
      const val = attributes[key]
      return val !== undefined
    }).map((key) => {
      const val = attributes[key]
      const s = `${key}="${val}"`
      return s
    })
  const { acc: res } = attrs.reduce(({ prevLineLength, acc }, attr) => {
    const test = ` ${attr}`
    if (prevLineLength + test.length > 100) {
      const s = `${i}${attr}`
      return {
        prevLineLength: s.length,
        acc: `${acc}\n${s}`,
      }
    }
    const newAcc = `${acc}${test}`
    return {
      prevLineLength: prevLineLength + test.length,
      acc: newAcc,
    }
  }, { prevLineLength: indentLength, acc: '' })

  return res
}

const wrap = (name, attrs, content) => {
  const s = `${name}${attrs}`
  return content ? `<${s}>
${content}
</${name}>` : `<${s}/>`
}

const makeContent = (content) => {
  if (!content) return ''
  const c = Array.isArray(content) ? content : [content]
  const indented = c.map(el => indent(el, 2))
  const cc = indented.join('\n')
  return cc
}
const indent = (content, spaces) => {
  const s = ' '.repeat(spaces)
  return content.split('\n').map((l) => {
    return `${s}${l}`
  }).join('\n')
}

/* documentary types/make-element.xml */
/**
 * @typedef {Object} MakeElementOptions Options to make a new element.
 * @prop {string|string[]} [content] The content to write inside of the element, such as string or an array of strings.
 * @prop {object} [attributes] A map of attributes to add to the element.
 */

module.exports=makeElement

module.exports.makeElement = makeElement
module.exports.makeAttrs = makeAttrs
//# sourceMappingURL=make-element.js.map