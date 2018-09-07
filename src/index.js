/**
 * Create a new element.
 * @param {MakeElementOptions} options Options to make a new element.
 * @param {string} options.name The name of the new element element.
 * @param {string} [options.content] The content to write inside of the element.
 * @param {object} [options.attributes] A map of attributes to add to the element.
 */
export const makeElement = (options) => {
  if (!options) throw new Error('Options were not passed.')
  const {
    name, content = '', attributes = {},
  } = options
  if (!name) throw new Error('Expected to see an element name.')
  const attrs = Object.keys(attributes).reduce((acc, key) => {
    const val = attributes[key]
    if (val === undefined) return acc
    return `${acc} ${key}="${val}"`
  }, '')
  const s = `${name}${attrs}`
  const res = content ? `<${s}>${content}</${name}>` : `<${s}/>`
  return res
}

/**
 * Draw a rounded corner by creating a C directive for the path element.
 * @param {Coordinate} from A coordinate used for drawing.
 * @param {number} from.x The `x` position of the coordinate.
 * @param {number} from.y The `y` position of the coordinate.
 * @param {Coordinate} to A coordinate used for drawing.
 * @param {number} to.x The `x` position of the coordinate.
 * @param {number} to.y The `y` position of the coordinate.
 * @param {boolean} [anticlockwise] Whether going anticlockwise.
 * @returns {string} A `C` part of the path.
 */
export const roundedCorner = (from, to, anticlockwise) => {
  const { x: fromX, y: fromY } = from
  const { x: toX, y: toY } = to
  const dy = toY - fromY
  const dx = toX - fromX
  const hdy = dy / 2
  const hdx = dx / 2
  const p3 = `${toX} ${toY}`
  let p1
  let p2
  const isRight = (dy > 0 && dx < 0) || (dy < 0 && dx > 0)
  if (!anticlockwise) {
    if (isRight) { // bottom-right
      p1 = `${fromX} ${fromY + hdy}`
      p2 = `${fromX + hdx} ${toY}`
    } else { // top-left
      p1 = `${fromX + hdx} ${fromY}`
      p2 = `${toX} ${toY - hdy}`
    }
  } else {
    if (isRight) { // bottom-right
      p1 = `${fromX + hdx} ${fromY}`
      p2 = `${toX} ${fromY + hdy}`
    } else { // top-left
      p1 = `${fromX} ${fromY + hdy}`
      p2 = `${fromX + hdx} ${toY}`
    }
  }
  return `C ${p1}, ${p2}, ${p3}`
}

/**
 * Remove the white space between tags.
 * @param {string} svg The svg string to minify.
 */
export const minify = (svg) => {
  const res = svg.replace(/>\s*</g, '><')
  return res
}

/**
 * Create an svg element.
 * @param {SVGOptions} options An option for creating an svg.
 * @param {number} options.width The width of the `svg`.
 * @param {number} options.height The height of the `svg`.
 * @param {string} options.content The content to put inside of the `svg`.
 * @param {boolean} [options.stretch=true] Expand the `svg` to the width of the container by not setting `width` and `height` attributes. Default `true`.
 */
export const svg = (options) => {
  const { width, height, stretch = true, content } = options
  const res = makeElement({
    name: 'svg',
    attributes: {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: `0, 0, ${width}, ${height}`,
      width: !stretch && width ? `${width}px` : undefined,
      height: !stretch && height ? `${height}px` : undefined,
    },
    content,
  })
  return res
}

/* documentary types/index.xml */
/**
 * @typedef {Object} SVGOptions An option for creating an svg.
 * @prop {number} width The width of the `svg`.
 * @prop {number} height The height of the `svg`.
 * @prop {string} content The content to put inside of the `svg`.
 * @prop {boolean} [stretch=true] Expand the `svg` to the width of the container by not setting `width` and `height` attributes. Default `true`.
 *
 * @typedef {Object} Coordinate A coordinate used for drawing.
 * @prop {number} x The `x` position of the coordinate.
 * @prop {number} y The `y` position of the coordinate.
 *
 * @typedef {Object} MakeElementOptions Options to make a new element.
 * @prop {string} name The name of the new element element.
 * @prop {string} [content] The content to write inside of the element.
 * @prop {object} [attributes] A map of attributes to add to the element.
 */
