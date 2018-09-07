const { debuglog } = require('util');

const LOG = debuglog('@svag/lib')

/**
 * A library for drawing SVGs with common methods.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
               async function lib(config = {}) {
  const {
    type,
  } = config
  LOG('@svag/lib called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */

module.exports = lib
//# sourceMappingURL=index.js.map