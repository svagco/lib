/**
 * Create a new element.
 * @param {MakeElementOptions} options Options to make a new element.
 * @param {string} options.name The name of the new element element.
 * @param {string|string[]} [options.content] The content to write inside of the element, such as string or an array of strings.
 * @param {object} [options.attributes] A map of attributes to add to the element.
 */
export const makeElement = (options) => {
  if (!options) throw new Error('Options were not passed.')
  const {
    name, content, attributes = {},
  } = options
  if (!name) throw new Error('Expected to see an element name.')
  const attrs = Object.keys(attributes).reduce((acc, key) => {
    const val = attributes[key]
    if (val === undefined) return acc
    return `${acc} ${key}="${val}"`
  }, '')
  const c = makeContent(content)
  const res = wrap(name, attrs, c)
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
  })
}

/* documentary types/make-element.xml */
/**
 * @typedef {Object} MakeElementOptions Options to make a new element.
 * @prop {string} name The name of the new element element.
 * @prop {string|string[]} [content] The content to write inside of the element, such as string or an array of strings.
 * @prop {object} [attributes] A map of attributes to add to the element.
 */

export default makeElement