import makeElement from '../lib/make-element'

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
  const res = makeElement('svg', {
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

/**
 * The `<rect>` element is a basic SVG shape that creates rectangles, defined by their corner's position, their width, and their height. The rectangles may have their corners rounded.
 * @param {RectAttributes} attributes Non-global attributes for the element.
 * @param {length|percentage} [attributes.x=0] This attribute determines the x coordinate of the rect. Default `0`.
 * @param {length|percentage} [attributes.y=0] This attribute determines the y coordinate of the rect. Default `0`.
 * @param {'auto'|length|percentage} [attributes.width="auto"] This attribute determines the width of the rect. Default `auto`.
 * @param {'auto'|length|percentage} [attributes.height="auto"] This attribute determines the height of the rect. Default `auto`.
 * @param {'auto'|length|percentage} [attributes.rx="auto"] This attribute determines the horizontal corner radius of the rect. Default `auto`.
 * @param {'auto'|length|percentage} [attributes.ry="auto"] This attribute determines the vertical corner radius of the rect. Default `auto`.
 * @param {number} [attributes.pathLength] This attribute lets specify the total length for the path, in user units.
 */
export const rect = (attributes) => {
  const res = makeElement('rect', {
    attributes,
  })
  return res
}

/* documentary types/units.xml */
/**
 * @typedef {string|number} length A length is a distance measurement, given as a number along with a unit.
 *
 * @typedef {string} percentage Percentages are specified as a number followed by a `%` character.
 */

/* documentary types/elements/svg.xml */
/**
 * @typedef {Object} SVGOptions An option for creating an svg.
 * @prop {number} width The width of the `svg`.
 * @prop {number} height The height of the `svg`.
 * @prop {string} content The content to put inside of the `svg`.
 * @prop {boolean} [stretch=true] Expand the `svg` to the width of the container by not setting `width` and `height` attributes. Default `true`.
 */

/* documentary types/elements/rect.xml */
/**
 * @typedef {Object} RectAttributes Non-global attributes for the element.
 * @prop {length|percentage} [x=0] This attribute determines the x coordinate of the rect. Default `0`.
 * @prop {length|percentage} [y=0] This attribute determines the y coordinate of the rect. Default `0`.
 * @prop {'auto'|length|percentage} [width="auto"] This attribute determines the width of the rect. Default `auto`.
 * @prop {'auto'|length|percentage} [height="auto"] This attribute determines the height of the rect. Default `auto`.
 * @prop {'auto'|length|percentage} [rx="auto"] This attribute determines the horizontal corner radius of the rect. Default `auto`.
 * @prop {'auto'|length|percentage} [ry="auto"] This attribute determines the vertical corner radius of the rect. Default `auto`.
 * @prop {number} [pathLength] This attribute lets specify the total length for the path, in user units.
 */
