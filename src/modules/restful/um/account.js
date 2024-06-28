const BaseAccount = require('../base/account')
const { validateRequiredParameters } = require('../../../helpers/validation')

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
      this.product = 'fapi'
    }

    /**
     * Change Multi-Assets Mode
     *
     * POST /fapi/v1/multiAssetsMargin
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#change-multi-assets-mode-trade}
     */
    changeMultiAssetsMode (multiAssetsMargin, options = {}) {
      validateRequiredParameters({ multiAssetsMargin })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/multiAssetsMargin`,
        Object.assign(options, {
          multiAssetsMargin: multiAssetsMargin.toLowerCase()
        })
      )
    }

    /**
     * Get Current Multi-Assets Mode
     *
     * GET /fapi/v1/multiAssetsMargin
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#multi-assets-margin-user_data}
     */
    getMultiAssetsMode (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/multiAssetsMargin`,
        options
      )
    }

    /**
     * Modify Order (TRADE)
     *
     * PUT /fapi/v1/order
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#modify-order-trade}
     */
    modifyOrder (symbol, side, quantity, price, options = {}) {
      validateRequiredParameters({ symbol, side, quantity, price })
      return this.signRequest(
        'PUT',
        `${this.baseURL}/${this.product}/v1/order`,
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          side,
          quantity,
          price
        })
      )
    }

    /**
     * Modify Multiple Orders (TRADE)
     *
     * PUT /fapi/v1/batchOrders
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#modify-multiple-orders-trade}
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
     * All Orders (USER_DATA)
     *
     * GET /fapi/v1/allOrders
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#all-orders-user_data}
     */
    getAllOrders (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/allOrders`,
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Futures Account Balance V2 (USER_DATA)
     *
     * GET /fapi/v2/balance
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#futures-account-balance-v2-user_data}
     */
    getFuturesAccountBalanceV2 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v2/balance`,
        options
      )
    }

    /**
     * Account Information V2 (USER_DATA)
     *
     * GET /fapi/v2/account
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#account-information-v2-user_data}
     */
    getAccountInformationV2 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v2/account`,
        options
      )
    }

    /**
     * Position Information V2 (USER_DATA)
     *
     * GET /fapi/v2/positionRisk
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#position-information-v2-user_data}
     */
    getPositionInformationV2 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v2/positionRisk`,
        options
      )
    }

    /**
     * Account Trade List (USER_DATA)
     *
     * GET /fapi/v1/userTrades
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#account-trade-list-user_data}
     */
    getAccountTradeList (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/userTrades`,
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Notional and Leverage Brackets (USER_DATA)
     *
     * GET /fapi/v1/leverageBracket
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#notional-and-leverage-brackets-user_data}
     */
    getNotionalAndLeverageBrackets (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/leverageBracket`,
        options
      )
    }

    /**
     * Query User Rate Limit (USER_DATA)
     *
     * GET /fapi/v1/rateLimit/order
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#query-user-rate-limit-user_data}
     */
    getUserRateLimit (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/rateLimit/order`,
        options
      )
    }

    /**
     * Toggle BNB Burn On Futures Trade (TRADE)
     *
     * POST /fapi/v1/feeBurn
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#toggle-bnb-burn-on-futures-trade-trade}
     */
    feeBurn (feeBurn, options = {}) {
      validateRequiredParameters({ feeBurn })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/feeBurn`,
        Object.assign(options, {
          feeBurn: feeBurn.toLowerCase()
        })
      )
    }

    /**
     * Get BNB Burn Status (USER_DATA)
     *
     * GET /fapi/v1/feeBurn
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-bnb-burn-status-user_data}
     */
    getFeeBurn (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/feeBurn`,
        options
      )
    }
  }

module.exports = Account
