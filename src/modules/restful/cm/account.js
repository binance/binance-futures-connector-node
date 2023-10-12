const BaseAccount = require('../base/account')
const {
  validateRequiredParameters,
  hasOneOfParameters
} = require('../../../helpers/validation')

/**
 * API account endpoints
 * @module Account
 * @param {*} superclass
 */
const Account = (superclass) =>
  class extends BaseAccount(superclass) {
    constructor (options = {}) {
      super(options)
      this.baseURL = options.baseURL
      this.product = 'dapi'
    }

    /**
     * Modify Order
     *
     * PUT /dapi/v1/order
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#modify-order-trade}
     *
     * @param {string} symbol
     * @param {string} side
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     *
     */
    modifyOrder (symbol, side, options = {}) {
      validateRequiredParameters({ symbol, side })
      return this.signRequest(
        'PUT',
        `${this.baseURL}/${this.product}/v1/order`,
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          side
        })
      )
    }

    /**
     * Modify Multiple Orders
     *
     * PUT /dapi/v1/batchOrders
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#modify-multiple-orders-trade}
     *
     * @param {array} batchOrders
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    modifyMultipleOrders (batchOrders, options = {}) {
      validateRequiredParameters({ batchOrders })
      return this.signRequest(
        'PUT',
        `${this.baseURL}/${this.product}/v1/batchOrders`,
        Object.assign(options, {
          batchOrders
        })
      )
    }

    /**
     * All Orders
     *
     * GET /dapi/v1/allOrders
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#all-orders-user_data}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getAllOrders (options = {}) {
      hasOneOfParameters({ symbol: options.symbol, pair: options.pair })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/allOrders`,
        options
      )
    }

    /**
     * Account Balance
     *
     * GET /dapi/v1/balance
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#account-balance-user_data}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getFuturesAccountBalance (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/balance`,
        options
      )
    }

    /**
     * Account Information
     *
     * GET /dapi/v1/account
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#account-information-user_data}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getAccountInformation (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/account`,
        options
      )
    }

    /**
     * Position Information
     *
     * GET /dapi/v1/positionRisk
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#position-risk-user_data}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getPositionInformation (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/positionRisk`,
        options
      )
    }

    /**
     * Account Trade List
     *
     * GET /dapi/v1/userTrades
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#account-trade-list-user_data}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getAccountTradeList (options = {}) {
      hasOneOfParameters({ symbol: options.symbol, pair: options.pair })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/userTrades`,
        options
      )
    }

    /**
     * Get Notional Bracket For Symbol
     *
     * GET /dapi/v2/leverageBracket
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#get-notional-bracket-for-symbol}
     *
     * @param {object} options
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getNotionalBracketForSymbol (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v2/leverageBracket`,
        options
      )
    }
  }

module.exports = Account
