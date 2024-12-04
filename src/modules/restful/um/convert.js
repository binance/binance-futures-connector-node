const { validateRequiredParameters } = require('../../../helpers/validation')

/**
 * API convert endpoints
 * @module Convert
 * @param {*} superclass
 */
const Convert = (superclass) =>
  class extends superclass {
    constructor (options = {}) {
      super(options)
      this.baseURL = options.baseURL
      this.product = 'fapi'
    }

    /**
     * List All Convert Pairs
     *
     * GET /fapi/v1/convert/exchangeInfo
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/convert}
     *
     * @param {object} options
     * @param {string} [options.fromAsset] - Either fromAsset or toAsset should be provided
     * @param {string} [options.toAsset] - Either fromAsset or toAsset should be provided
     */
    listAllConvertPairs (options = {}) {
      if (options.fromAsset && options.toAsset) {
        throw new Error('Either fromAsset or toAsset should be provided, not both')
      } else if (!options.fromAsset && !options.toAsset) {
        throw new Error('Either fromAsset or toAsset should be provided')
      }
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/convert/exchangeInfo`,
        options
      )
    }

    /**
     * Send Quote Request (USER_DATA)
     *
     * POST /fapi/v1/convert/getQuote
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/convert/Send-quote-request}
     *
     * @param {string} fromAsset
     * @param {string} toAsset
     * @param {object} [options]
     * @param {number} [options.fromAmount] - Either fromAmount or toAmount should be provided. When specified, it is the amount you will be debited after the conversion
     * @param {number} [options.toAmount] - Either fromAmount or toAmount should be provided. When specified, it is the amount you will be credited after the conversion
     * @param {string} [options.validTime] - 10s, default 10s
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    sendQuoteRequest (fromAsset, toAsset, options = {}) {
      validateRequiredParameters({ fromAsset, toAsset })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/convert/getQuote`,
        { ...options, fromAsset: fromAsset.toUpperCase(), toAsset: toAsset.toUpperCase() }
      )
    }

    /**
     * Accept the offered quote (USER_DATA)
     *
     * POST /fapi/v1/convert/acceptQuote
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/convert/Accept-Quote}
     *
     * @param {string} quoteId
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    acceptQuote (quoteId, options = {}) {
      validateRequiredParameters({ quoteId })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/convert/acceptQuote`,
        { ...options, quoteId }
      )
    }

    /**
     * Order status (USER_DATA)
     *
     * GET /fapi/v1/convert/orderStatus
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/convert/Order-Status}
     *
     * @param {object} options
     * @param {string} [options.orderId] - Either orderId or quoteId is required
     * @param {string} [options.quoteId] - Either orderId or quoteId is required
     */
    orderStatus (options = {}) {
      if (options.orderId && options.quoteId) {
        throw new Error('Either fromAsset or toAsset should be provided, not both')
      } else if (!options.orderId && !options.toAsset) {
        throw new Error('Either fromAsset or toAsset should be provided')
      }
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/convert/orderStatus`,
        options
      )
    }
  }

module.exports = Convert
