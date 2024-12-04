'use strict'

const { validateRequiredParameters } = require('../../../helpers/validation')

/**
 * API market endpoints
 * @module UserDataStream
 * @param {*} superclass
 */
const UserDataStream = (superclass) =>
  class extends superclass {
    /**
     * Create a ListenKey (USER_STREAM)
     *
     * POST /fapi/v1/listenKey
     * POST /dapi/v1/listenKey
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Start-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Start-User-Data-Stream}
     */
    createListenKey () {
      return this.publicRequest('POST', `/${this.product}/v1/listenKey`)
    }

    /**
     * Ping/Keep-alive a ListenKey (USER_STREAM)
     *
     * PUT /fapi/v1/listenKey
     * PUT /dapi/v1/listenKey
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Keepalive-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream}
     *
     * @param {string} listenKey
     */
    renewListenKey (listenKey) {
      if (typeof listenKey !== 'string') {
        throw new Error('ListenKey must be a string')
      }
      validateRequiredParameters({ listenKey })
      return this.publicRequest('PUT', `/${this.product}/v1/listenKey`, {
        listenKey
      })
    }

    /**
     * Close a ListenKey (USER_STREAM)
     *
     * DELETE /fapi/v1/listenKey
     * DELETE /dapi/v1/listenKey
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Close-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Close-User-Data-Stream}
     *
     * @param {string} listenKey
     */
    closeListenKey (listenKey) {
      if (typeof listenKey !== 'string') {
        throw new Error('ListenKey must be a string')
      }
      validateRequiredParameters({ listenKey })
      return this.publicRequest('DELETE', `/${this.product}/v1/listenKey`, {
        listenKey
      })
    }
  }

module.exports = UserDataStream
