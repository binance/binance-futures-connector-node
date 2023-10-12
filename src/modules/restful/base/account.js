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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#change-position-mode-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#position-side-dual-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#new-order-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#place-multiple-orders-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-order-modify-history-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#query-order-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#cancel-order-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#cancel-all-open-orders-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#cancel-multiple-orders-user_data}
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
     * DELETE /fapi/v1/countdownCancelAll
     * DELETE /dapi/v1/countdownCancelAll
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#cancel-all-open-orders-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#query-current-open-order-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#current-all-open-orders-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#change-initial-leverage-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#change-margin-type-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#modify-isolated-position-margin-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-position-margin-change-history-trade}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-income-history-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#user-s-force-orders-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#position-adl-quantile-estimation-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#user-commission-rate-user_data}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-download-id-for-futures-transaction-history-user_data}
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
