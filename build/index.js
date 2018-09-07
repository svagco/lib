/**
 * Create a new element.
 * @param {MakeElementOptions} options Options to make a new element.
 * @param {string} options.name The name of the new element element.
 * @param {string} [options.content] The content to write inside of the element.
 * @param {object} [options.attributes] A map of attributes to add to the element.
 */
       const makeElement = (options) => {
  if (!options) throw new Error('Options were not passed.')
  const {
    name, content = '', attributes = {},
  } = options
  if (!name) throw new Error('Expected to see an element name.')
  const attrs = Object.keys(attributes).reduce((acc, key) => {
    const val = attributes[key]
    return `${acc} ${key}="${val}"`
  }, '')
  const s = `${name}${attrs}`
  const res = content ? `<${s}>${content}</${name}>` : `<${s}/>`
  return res
}

/* documentary types/index.xml */
/**
 * @typedef {Object} MakeElementOptions Options to make a new element.
 * @prop {string} name The name of the new element element.
 * @prop {string} [content] The content to write inside of the element.
 * @prop {object} [attributes] A map of attributes to add to the element.
 */


module.exports.makeElement = makeElement
//# sourceMappingURL=index.js.map