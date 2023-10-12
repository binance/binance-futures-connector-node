'use strict'

const APIBase = require('./APIBase')
const restfulModules = require('./modules/restful/um')
const { flowRight } = require('./helpers/utils')

class UMFutures extends flowRight(...Object.values(restfulModules))(APIBase) {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    options.baseURL = options.baseURL || 'https://fapi.binance.com'
    super(options.baseURL, {
      apiKey,
      apiSecret,
      ...options
    })
  }
}

module.exports = UMFutures
