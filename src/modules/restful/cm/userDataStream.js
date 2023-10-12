const BaseUserDataStream = require('../base/userDataStream')

/**
 * API account endpoints
 * @module UserDataStream
 * @param {*} superclass
 */
const UserDataStream = (superclass) =>
  class extends BaseUserDataStream(superclass) {
    constructor (options = {}) {
      super(options)
      this.baseURL = options.baseURL
      this.product = 'dapi'
    }
  }

module.exports = UserDataStream
