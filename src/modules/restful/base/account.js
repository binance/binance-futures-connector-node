'use strict'

const { validateRequiredParameters } = require('../../../helpers/validation')

/**
 * API account endpoints
 * @module Account
 * @param {*} superclass
 */
const Account = (superclass) =>
  class extends superclass {
    /**
     * Change Position Mode
     *
     * POST /fapi/v1/positionSide/dual
     * POST /dapi/v1/positionSide/dual
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Position-Mode}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Position-Mode}
     *
     * @param {string} dualSidePosition - If true, Hedge Mode. Else One-way Mode
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    changePositionMode (dualSidePosition, options = {}) {
      validateRequiredParameters({ dualSidePosition })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/positionSide/dual`,
        { ...options, dualSidePosition: dualSidePosition.toLowerCase() }
      )
    }

    /**
     * Get Current Position Mode
     *
     * GET /fapi/v1/positionSide/dual
     * GET /dapi/v1/positionSide/dual
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Position-Mode}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Current-Position-Mode}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getPositionMode (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/positionSide/dual`,
        options
      )
    }

    /**
     * New Order (TRADE)
     *
     * POST /fapi/v1/order
     * POST /dapi/v1/order
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade}
     *
     * @param {string} symbol
     * @param {string} side
     * @param {string} type
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    newOrder (symbol, side, type, options = {}) {
      validateRequiredParameters({ symbol, side, type })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/order`,
        { ...options, symbol: symbol.toUpperCase(), side: side.toUpperCase(), type: type.toUpperCase() }
      )
    }

    /**
     * Place Multiple Orders (TRADE)
     *
     * POST /fapi/v1/batchOrders
     * POST /dapi/v1/batchOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Place-Multiple-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Place-Multiple-Orders}
     *
     * @param {Array} batchOrders
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    placeMultipleOrders (batchOrders, options = {}) {
      validateRequiredParameters({ batchOrders })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/batchOrders`,
        { ...options, batchOrders }
      )
    }

    /**
     * Get Order Modification History (USER_DATA)
     *
     * GET /fapi/v1/orderAmendment
     * GET /dapi/v1/orderAmendment
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Order-Modify-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Get-Order-Modify-History}
     *
     * @param {string} symbol - The symbol for which the order modification history is requested.
     * @param {Object} options - The additional options for the request. (optional)
     */
    getOrderModifyHistory (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/orderAmendment`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Query Order (USER_DATA)
     *
     * GET /fapi/v1/order
     * GET /dapi/v1/order
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Query-Order}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Query-Order}
     *
     * @param {string} symbol - The symbol for which the order is placed.
     * @param {string} side - The side of the order (BUY/SELL).
     * @param {string} type - The type of the order (LIMIT, MARKET, etc.).
     * @param {Object} options - The additional options for the order. (optional)
     */
    queryOrder (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/order`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Cancel Order (USER_DATA)
     *
     * DELETE /fapi/v1/order
     * DELETE /dapi/v1/order
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Order}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Cancel-Order}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    cancelOrder (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'DELETE',
        `${this.baseURL}/${this.product}/v1/order`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Cancel All Open Orders (USER_DATA)
     *
     * DELETE /fapi/v1/allOpenOrders
     * DELETE /dapi/v1/allOpenOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-All-Open-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Cancel-All-Open-Orders}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     *
     */
    cancelAllOpenOrders (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'DELETE',
        `${this.baseURL}/${this.product}/v1/allOpenOrders`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Cancel Multiple Orders (USER_DATA)
     *
     * DELETE /fapi/v1/batchOrders
     * DELETE /dapi/v1/batchOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Multiple-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Cancel-Multiple-Orders}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    cancelMultipleOrders (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'DELETE',
        `${this.baseURL}/${this.product}/v1/batchOrders`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Cancel All Open Orders (USER_DATA)
     *
     * POST /fapi/v1/countdownCancelAll
     * POST /dapi/v1/countdownCancelAll
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Auto-Cancel-All-Open-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Auto-Cancel-All-Open-Orders}
     *
     * @param {string} symbol
     * @param {number} countdownTime
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    autoCancelAllOpenOrders (symbol, countdownTime, options = {}) {
      validateRequiredParameters({ symbol, countdownTime })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/countdownCancelAll`,
        { ...options, symbol: symbol.toUpperCase(), countdownTime }
      )
    }

    /**
     * Query Current Open Order (USER_DATA)
     *
     * GET /fapi/v1/openOrder
     * GET /dapi/v1/openOrder
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Query-Current-Open-Order}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Query-Current-Open-Order}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    queryCurrentOpenOrder (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/openOrder`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Current All Open Orders (USER_DATA)
     *
     * GET /fapi/v1/openOrders
     * GET /dapi/v1/openOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Current-All-Open-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Current-All-Open-Orders}
     *
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getCurrentAllOpenOrders (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/openOrders`,
        options
      )
    }

    /**
     * Change Initial Leverage (TRADE)
     *
     * POST /fapi/v1/leverage
     * POST /dapi/v1/leverage
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Initial-Leverage}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Initial-Leverage}
     *
     * @param {string} symbol
     * @param {number} leverage
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    changeInitialLeverage (symbol, leverage, options = {}) {
      validateRequiredParameters({ symbol, leverage })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/leverage`,
        { ...options, symbol: symbol.toUpperCase(), leverage }
      )
    }

    /**
     * Change Margin Type (TRADE)
     *
     * POST /fapi/v1/marginType
     * POST /dapi/v1/marginType
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Margin-Type}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Change-Margin-Type}
     *
     * @param {string} symbol
     * @param {string} marginType
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    changeMarginType (symbol, marginType, options = {}) {
      validateRequiredParameters({ symbol, marginType })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/marginType`,
        { ...options, symbol: symbol.toUpperCase(), marginType: marginType.toUpperCase() }
      )
    }

    /**
     * Modify Isolated Position Margin (TRADE)
     *
     * POST /fapi/v1/positionMargin
     * POST /dapi/v1/positionMargin
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Modify-Isolated-Position-Margin}
     *
     * @param {string} symbol
     * @param {number} amount
     * @param {number} type
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    modifyIsolatedPositionMargin (symbol, amount, type, options = {}) {
      validateRequiredParameters({ symbol, amount, type })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/positionMargin`,
        { ...options, symbol: symbol.toUpperCase(), amount, type }
      )
    }

    /**
     * Get Position Margin Change History (TRADE)
     *
     * GET /fapi/v1/positionMargin/history
     * GET /dapi/v1/positionMargin/history
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Position-Margin-Change-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Get-Position-Margin-Change-History}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getPositionMarginChangeHistory (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/positionMargin/history`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Get Income History (USER_DATA)
     *
     * GET /fapi/v1/income
     * GET /dapi/v1/income
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Income-History}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string} [options.incomeType] - TRANSFER, WELCOME_BONUS, REALIZED_PNL, FUNDING_FEE, COMMISSION, INSURANCE_CLEAR, REFERRAL_KICKBACK, COMMISSION_REBATE, API_REBATE, CONTEST_REWARD, CROSS_COLLATERAL_TRANSFER, OPTIONS_PREMIUM_FEE, OPTIONS_SETTLE_PROFIT, INTERNAL_TRANSFER, AUTO_EXCHANGE, DELIVERED_SETTELMENT, COIN_SWAP_DEPOSIT, COIN_SWAP_WITHDRAW, POSITION_LIMIT_INCREASE_FEE
     * @param {number} [options.startTime] - Timestamp in ms to get funding from INCLUSIVE.
     * @param {number} [options.endTime] - Timestamp in ms to get funding until INCLUSIVE.
     * @param {number} [options.page]
     * @param {number} [options.limit] - Default 100, max 1000
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getIncomeHistory (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/income`,
        options
      )
    }

    /**
     * User’s Force Orders (USER_DATA)
     *
     * GET /fapi/v1/forceOrders
     * GET /dapi/v1/forceOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Users-Force-Orders}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Users-Force-Orders}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string} [options.autoCloseType] - LIQUIDATION for liquidation orders, ADL for ADL orders.
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 100, max 1000
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getUsersForceOrders (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/forceOrders`,
        options
      )
    }

    /**
     * Position ADL Quantile Estimation (USER_DATA)
     *
     * GET /fapi/v1/adlQuantile
     * GET /dapi/v1/adlQuantile
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Position-ADL-Quantile-Estimation}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/Position-ADL-Quantile-Estimation}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getPositionADLQuantileEstimation (options = {}) {
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/adlQuantile`,
        options
      )
    }

    /**
     * User Commission Rate (USER_DATA)
     *
     * GET /fapi/v1/commissionRate
     * GET /dapi/v1/commissionRate
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/User-Commission-Rate}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/User-Commission-Rate}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getUserCommissionRate (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/commissionRate`,
        { ...options, symbol: symbol.toUpperCase() }
      )
    }

    /**
     * Get Download Id For Futures Transaction History (USER_DATA)
     *
     * GET /fapi/v1/income/asyn
     * GET /dapi/v1/income/asyn
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Transaction-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Download-Id-For-Futures-Transaction-History}
     *
     * @param {@number} startTime - The start timestamp.
     * @param {@number} endTime - The end timestamp.
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getDownloadIdForFuturesTransactionHistory (
      startTime,
      endTime,
      options = {}
    ) {
      validateRequiredParameters({ startTime, endTime })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/income/asyn`,
        { ...options, startTime, endTime }
      )
    }

    /**
     * Get Futures Transaction History Download Link by Id (USER_DATA)
     *
     * GET /fapi/v1/income/asyn/id
     * GET /dapi/v1/income/asyn/id
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Futures-Transaction-History-Download-Link-by-Id}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Futures-Transaction-History-Download-Link-by-Id}
     *
     * @param {string} downloadId - get by download id api
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getFuturesTransactionHistoryDownloadLinkById (
      downloadId,
      options = {}
    ) {
      validateRequiredParameters({ downloadId })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/income/asyn/id`,
        { ...options, downloadId }
      )
    }

    /**
     * Get Download Id For Futures Order History (USER_DATA)
     *
     * GET /fapi/v1/order/asyn
     * GET /dapi/v1/order/asyn
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Order-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Download-Id-For-Futures-Order-History}
     *
     * @param {@number} startTime - Timestamp in ms
     * @param {@number} endTime - Timestamp in ms
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getDownloadIdForFuturesOrderHistory (
      startTime,
      endTime,
      options = {}
    ) {
      validateRequiredParameters({ startTime, endTime })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/order/asyn`,
        { ...options, startTime, endTime }
      )
    }

    /**
     * Get Futures Order History Download Link by Id (USER_DATA)
     *
     * GET /fapi/v1/order/asyn/id
     * GET /dapi/v1/order/asyn/id
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Futures-Order-History-Download-Link-by-Id}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Futures-Order-History-Download-Link-by-Id}
     *
     * @param {string} downloadId - get by download id api
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getFuturesOrderHistoryDownloadLinkById (
      downloadId,
      options = {}
    ) {
      validateRequiredParameters({ downloadId })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/order/asyn/id`,
        { ...options, downloadId }
      )
    }

    /**
     * Get Download Id For Futures Trade History (USER_DATA)
     *
     * GET /fapi/v1/trade/asyn
     * GET /dapi/v1/trade/asyn
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Trade-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Download-Id-For-Futures-Trade-History}
     *
     * @param {@number} startTime - Timestamp in ms
     * @param {@number} endTime - Timestamp in ms
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getDownloadIdForFuturesTradeHistory (
      startTime,
      endTime,
      options = {}
    ) {
      validateRequiredParameters({ startTime, endTime })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/trade/asyn`,
        { ...options, startTime, endTime }
      )
    }

    /**
     * Get Futures Trade Download Link by Id (USER_DATA)
     *
     * GET /fapi/v1/trade/asyn/id
     * GET /dapi/v1/trade/asyn/id
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Futures-Trade-Download-Link-by-Id}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/account/Get-Futures-Trade-Download-Link-by-Id}
     *
     * @param {string} downloadId - get by download id api
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    getFuturesTradeDownloadLinkById (
      downloadId,
      options = {}
    ) {
      validateRequiredParameters({ downloadId })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/trade/asyn/id`,
        { ...options, downloadId }
      )
    }
  }

module.exports = Account
