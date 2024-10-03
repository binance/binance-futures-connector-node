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
     * Create a ListenKey (USER_STREAM)<br>
     *
     * POST /fapi/v1/listenKey<br>
     * POST /dapi/v1/listenKey<br>
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Start-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Start-User-Data-Stream}
     */
    createListenKey () {
      return this.publicRequest('POST', `/${this.product}/v1/listenKey`)
    }

    /**
     * Ping/Keep-alive a ListenKey (USER_STREAM)<br>
     *
     * PUT /fapi/v1/listenKey<br>
     * PUT /dapi/v1/listenKey<br>
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Keepalive-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Keepalive-User-Data-Stream}
     *
     * @param {string} listenKey
     */
    renewListenKey (listenKey) {
      validateRequiredParameters({ listenKey })
      return this.publicRequest('PUT', `/${this.product}/v1/listenKey`, {
        listenKey
      })
    }

    /**
     * Close a ListenKey (USER_STREAM)<br>
     *
     * DELETE /fapi/v1/listenKey<br>
     * DELETE /dapi/v1/listenKey<br>
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Close-User-Data-Stream}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Close-User-Data-Stream}
     *
     * @param {string} listenKey
     */
    closeListenKey (listenKey) {
      validateRequiredParameters({ listenKey })
      return this.publicRequest('DELETE', `/${this.product}/v1/listenKey`, {
        listenKey
      })
    }
  }

module.exports = UserDataStream
