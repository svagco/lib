import makeElement from './lib/make-element'

/**
 * Draw a rounded corner by creating a C directive for the path element.
 * @param {Coordinate} from A coordinate used for drawing.
 * @param {number} from.x The `x` position of the coordinate.
 * @param {number} from.y The `y` position of the coordinate.
 * @param {Coordinate} to A coordinate used for drawing.
 * @param {number} to.x The `x` position of the coordinate.
 * @param {number} to.y The `y` position of the coordinate.
 * @param {boolean} [anticlockwise] Whether the path is going anticlockwise. Default `false`.
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
    if (isRight) {
      p1 = `${fromX} ${fromY + hdy}`
      p2 = `${fromX + hdx} ${toY}`
    } else {
      p1 = `${fromX + hdx} ${fromY}`
      p2 = `${toX} ${toY - hdy}`
    }
  } else {
    if (isRight) {
      p1 = `${fromX + hdx} ${fromY}`
      p2 = `${toX} ${fromY + hdy}`
    } else {
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

/* documentary types/index.xml */
/**
 * @typedef {Object} Coordinate A coordinate used for drawing.
 * @prop {number} x The `x` position of the coordinate.
 * @prop {number} y The `y` position of the coordinate.
 */

export { makeElement }
export { svg, rect } from './elements'