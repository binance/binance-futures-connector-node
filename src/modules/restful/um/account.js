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
     * Futures Account Balance V3 (USER_DATA)
     *
     * GET /fapi/v3/balance
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Futures-Account-Balance-V3}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    getFuturesAccountBalanceV3 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v3/balance`,
        options
      )
    }

    /**
     * Account Information V3 (USER_DATA)
     *
     * GET /fapi/v3/account
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Information-V3}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    getAccountInformationV3 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v3/account`,
        options
      )
    }

    /**
     * Change Multi-Assets Mode
     *
     * POST /fapi/v1/multiAssetsMargin
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Multi-Assets-Mode}
     *
     * @param {string} multiAssetsMargin - If true, Multi-Assets Mode. Else Single-Asset Mode
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    changeMultiAssetsMode (multiAssetsMargin, options = {}) {
      validateRequiredParameters({ multiAssetsMargin })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/multiAssetsMargin`,
        { ...options, multiAssetsMargin: multiAssetsMargin.toLowerCase() }
      )
    }

    /**
     * Get Current Multi-Assets Mode
     *
     * GET /fapi/v1/multiAssetsMargin
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Multi-Assets-Mode}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
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
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Order}
     *
     * @param {string} symbol
     * @param {string} side - BUY or SELL
     * @param {number} quantity - Order quantity, cannot be sent with closePosition=true
     * @param {number} price
     * @param {object} [options]
     * @param {number} [options.orderId]
     * @param {string} [options.origClientOrderId]
     * @param {string} [options.priceMatch] - only avaliable for LIMIT/STOP/TAKE_PROFIT order; can be set to OPPONENT/ OPPONENT_5/ OPPONENT_10/ OPPONENT_20: /QUEUE/ QUEUE_5/ QUEUE_10/ QUEUE_20; Can't be passed together with price
     * @param {number} [options.recvWindow]
     */
    modifyOrder (symbol, side, quantity, price, options = {}) {
      validateRequiredParameters({ symbol, side, quantity, price })
      return this.signRequest(
        'PUT',
        `${this.baseURL}/${this.product}/v1/order`,
        { ...options, symbol: symbol.toUpperCase(), side, quantity, price }
      )
    }

    /**
     * Modify Multiple Orders (TRADE)
     *
     * PUT /fapi/v1/batchOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Multiple-Orders}
     *
     * @param {object} batchOrders - order list. Max 5 orders
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    modifyMultipleOrders (batchOrders, options = {}) {
      validateRequiredParameters({ batchOrders })
      return this.signRequest(
        'PUT',
        `${this.baseURL}/${this.product}/v1/batchOrders`,
        { ...options, batchOrders }
      )
    }

    /**
     * All Orders (USER_DATA)
     *
     * GET /fapi/v1/allOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/All-Orders}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.orderId]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     * @param {number} [options.recvWindow]
     */
    getAllOrders (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/allOrders`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Futures Account Configuration (USER_DATA)
     *
     * GET /fapi/v1/accountConfig
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Account-Config}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    getAccountConfig (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/accountConfig`,
        options
      )
    }

    /**
     * Symbol Configuration (USER_DATA)
     *
     * GET /fapi/v1/symbolConfig
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Symbol-Config}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.recvWindow]
     */
    getSymbolConfig (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/symbolConfig`,
        options
      )
    }

    /**
     * Position Information V3 (USER_DATA)
     *
     * GET /fapi/v3/positionRisk
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Position-Information-V3}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.recvWindow]
     */
    getPositionInformationV3 (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v3/positionRisk`,
        options
      )
    }

    /**
     * Account Trade List (USER_DATA)
     *
     * GET /fapi/v1/userTrades
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Account-Trade-List}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.orderId] - This can only be used in combination with symbol
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.fromId] - Trade id to fetch from. Default gets most recent trades.
     * @param {number} [options.limit] - Default 500, max 1000
     * @param {number} [options.recvWindow]
     */
    getAccountTradeList (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/userTrades`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Notional and Leverage Brackets (USER_DATA)
     *
     * GET /fapi/v1/leverageBracket
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Notional-and-Leverage-Brackets}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.recvWindow]
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
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Query-Rate-Limit}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
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
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Toggle-BNB-Burn-On-Futures-Trade}
     *
     * @param {string} feeBurn - If true, Fee Discount On. Else Fee Discount Off
     * @param {object} [options]
     * @param {number} [options.recvWindow]
     */
    feeBurn (feeBurn, options = {}) {
      validateRequiredParameters({ feeBurn })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/feeBurn`,
        { ...options, feeBurn: feeBurn.toLowerCase() }
      )
    }

    /**
     * Get BNB Burn Status (USER_DATA)
     *
     * GET /fapi/v1/feeBurn
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-BNB-Burn-Status}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow]
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
