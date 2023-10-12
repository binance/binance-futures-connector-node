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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#start-user-data-stream-user_stream}
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#start-user-data-stream-user_stream}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#keepalive-user-data-stream-user_stream}
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#keepalive-user-data-stream-user_stream}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#close-user-data-stream-user_stream}
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#close-user-data-stream-user_stream}
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
