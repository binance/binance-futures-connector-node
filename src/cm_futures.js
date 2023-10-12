'use strict'

const APIBase = require('./APIBase')
const restfulModules = require('./modules/restful/cm')
const { flowRight } = require('./helpers/utils')

class CMFutures extends flowRight(...Object.values(restfulModules))(APIBase) {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    options.baseURL = options.baseURL || 'https://dapi.binance.com'
    super(options.baseURL, {
      apiKey,
      apiSecret,
      ...options
    })
  }
}

module.exports = CMFutures
