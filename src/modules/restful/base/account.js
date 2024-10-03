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
     */
    changePositionMode (dualSidePosition, options = {}) {
      validateRequiredParameters({ dualSidePosition })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/positionSide/dual`,
        Object.assign(options, {
          dualSidePosition: dualSidePosition.toLowerCase()
        })
      )
    }

    /**
     * Get Current Position Mode
     *
     * GET /fapi/v1/positionSide/dual
     * GET /dapi/v1/positionSide/dual
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Position-Mode}
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
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/New-Order}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          side: side.toUpperCase(),
          type: type.toUpperCase()
        })
      )
    }

    /**
     * Place Multiple Orders (TRADE)
     *
     * POST /fapi/v1/batchOrders
     * POST /dapi/v1/batchOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Place-Multiple-Orders}
     * @param {Array} batchOrders
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     */
    placeMultipleOrders (batchOrders, options = {}) {
      validateRequiredParameters({ batchOrders })
      return this.signRequest(
        'POST',
        `${this.baseURL}/${this.product}/v1/batchOrders`,
        Object.assign(options, {
          batchOrders
        })
      )
    }

    /**
     * Get Order Modification History (USER_DATA)
     *
     * GET /fapi/v1/orderAmendment
     * GET /dapi/v1/orderAmendment
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Order-Modify-History}
     *
     * @param {string} symbol - The symbol for which the order modification history is requested.
     * @param {Object} options - The additional options for the request. (optional)
     */
    getOrderModifyHistory (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/orderAmendment`,
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Query Order (USER_DATA)
     *
     * GET /fapi/v1/order
     * GET /dapi/v1/order
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/websocket-api/Query-Order}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Cancel Order (USER_DATA)
     *
     * DELETE /fapi/v1/order
     * DELETE /dapi/v1/order
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Order}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Cancel All Open Orders (USER_DATA)
     *
     * DELETE /fapi/v1/allOpenOrders
     * DELETE /dapi/v1/allOpenOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-All-Open-Orders}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Cancel Multiple Orders (USER_DATA)
     *
     * DELETE /fapi/v1/batchOrders
     * DELETE /dapi/v1/batchOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-Multiple-Orders}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Cancel All Open Orders (USER_DATA)
     *
     * POST /fapi/v1/countdownCancelAll
     * POST /dapi/v1/countdownCancelAll
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Auto-Cancel-All-Open-Orders}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          countdownTime
        })
      )
    }

    /**
     * Query Current Open Order (USER_DATA)
     *
     * GET /fapi/v1/openOrder
     * GET /dapi/v1/openOrder
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Query-Current-Open-Order}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Current All Open Orders (USER_DATA)
     *
     * GET /fapi/v1/openOrders
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Current-All-Open-Orders}
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
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Initial-Leverage}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          leverage
        })
      )
    }

    /**
     * Change Margin Type (TRADE)
     *
     * POST /fapi/v1/marginType
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Change-Margin-Type}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          marginType: marginType.toUpperCase()
        })
      )
    }

    /**
     * Modify Isolated Position Margin (TRADE)
     *
     * POST /fapi/v1/positionMargin
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase(),
          amount,
          type
        })
      )
    }

    /**
     * Get Position Margin Change History (TRADE)
     *
     * GET /fapi/v1/positionMargin/history
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Get-Position-Margin-Change-History}
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
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Get Income History (USER_DATA)
     *
     * GET /fapi/v1/income
     * GET /dapi/v1/income
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History}
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
     */
    getUserCommissionRate (symbol, options = {}) {
      validateRequiredParameters({ symbol })
      return this.signRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/commissionRate`,
        Object.assign(options, {
          symbol: symbol.toUpperCase()
        })
      )
    }

    /**
     * Get Download Id For Futures Transaction History (USER_DATA)
     *
     * GET /fapi/v1/income/asyn
     * GET /dapi/v1/income/asyn
     *
     * @param {@number} startTime - The start timestamp.
     * @param {@number} endTime - The end timestamp.
     * @param {object} [options]
     * @param {number} [options.recvWindow] - The value cannot be greater than 60000
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Transaction-History}
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
        Object.assign(options, {
          startTime,
          endTime
        })
      )
    }
  }

module.exports = Account
