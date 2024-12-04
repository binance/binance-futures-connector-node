'use strict'

const { validateRequiredParameters } = require('../../../helpers/validation')

/**
 * API market endpoints
 * @module Market
 * @param {*} superclass
 */
const Market = (superclass) =>
  class extends superclass {
    /**
     * Test Connectivity
     *
     * UM: GET /fapi/v1/ping
     * CM: GET /dapi/v1/ping
     *
     * Test connectivity to the Rest API.
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Test-Connectivity}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Test-Connectivity}
     */
    ping () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/ping`
      )
    }

    /**
     * Test Connectivity
     *
     * UM: GET /fapi/v1/time
     * CM: GET /dapi/v1/time
     *
     * Test connectivity to the Rest API and get the current server time.
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Check-Server-Time}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Check-Server-time}
     */
    getTime () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/time`
      )
    }

    /**
     * Get Exchange Information
     *
     * UM: GET /fapi/v1/exchangeInfo
     * CM: GET /dapi/v1/exchangeInfo
     *
     * Get current exchange trading rules and symbol information.
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Exchange-Information}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Exchange-Information}
     */
    getExchangeInfo () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/exchangeInfo`
      )
    }

    /**
     * Get Order Book
     *
     * UM: GET /fapi/v1/depth
     * CM: GET /dapi/v1/depth
     *
     * Get the Order Book for a specific symbol.
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Order-Book}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit] - Default 500; Valid limits:[5, 10, 20, 50, 100, 500, 1000]
     */
    getDepth (symbol, limit) {
      validateRequiredParameters({ symbol })
      if (limit && ![5, 10, 20, 50, 100, 500, 1000].includes(limit)) {
        throw new Error(
          'Invalid limit value. Valid values are: 5, 10, 20, 50, 100, 500, 1000'
        )
      }
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/depth`,
        { symbol, limit }
      )
    }

    /**
     * Get recent trades (up to last 500).
     *
     * UM: GET /fapi/v1/trades
     * CM: GET /dapi/v1/trades
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Recent-Trades-List}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Recent-Trades-List}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getTrades (symbol, limit) {
      validateRequiredParameters({ symbol })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/trades`,
        { symbol, limit }
      )
    }

    /**
     * Get older trades.
     *
     * UM: GET /fapi/v1/historicalTrades
     * CM: GET /dapi/v1/historicalTrades
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Old-Trades-Lookup}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Old-Trades-Lookup}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.limit] - Default 500, max 1000
     * @param {number} [options.fromId] - TradeId to fetch from. Default gets most recent trades
     */
    getHistoricalTrades (symbol, limit, fromId) {
      validateRequiredParameters({ symbol })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/historicalTrades`,
        { symbol, limit, fromId }
      )
    }

    /**
     * Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.
     *
     * UM: GET /fapi/v1/aggTrades
     * CM: GET /dapi/v1/aggTrades
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Compressed-Aggregate-Trades-List}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Compressed-Aggregate-Trades-List}
     *
     * @param {string} symbol
     * @param {object} [options]
     * @param {number} [options.fromId] - TradeId to fetch from. Default gets most recent trades
     * @param {number} [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE
     * @param {number} [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getAggTrades (symbol, fromId, startTime, endTime, limit) {
      validateRequiredParameters({ symbol })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/aggTrades`,
        { symbol, fromId, startTime, endTime, limit }
      )
    }

    /**
     * Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time.
     *
     * UM: GET /fapi/v1/klines
     * CM: GET /dapi/v1/klines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Kline-Candlestick-Data}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Kline-Candlestick-Data}
     *
     * @param {string} symbol
     * @param {string} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getKlines (symbol, interval, startTime, endTime, limit) {
      validateRequiredParameters({ symbol, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/klines`,
        { symbol, interval, startTime, endTime, limit }
      )
    }

    /**
     * Get the premium index and funding rate for a symbol.
     *
     * UM: GET /fapi/v1/premiumIndex
     * CM: GET /dapi/v1/premiumIndex
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-and-Mark-Price}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     */
    getPremiumIndex (symbol) {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/premiumIndex`,
        { symbol }
      )
    }

    /**
     * Get funding rate history.
     *
     * UM: GET /fapi/v1/fundingRate
     * CM: GET /dapi/v1/fundingRate
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Get-Funding-Rate-History}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Get-Funding-Rate-History-of-Perpetual-Futures}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {number} [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE
     * @param {number} [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getFundingRate (symbol, startTime, endTime, limit) {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/fundingRate`,
        { symbol, startTime, endTime, limit }
      )
    }

    /**
     * Get premium index klines.
     *
     * UM: GET /fapi/v1/premiumIndexKlines
     * CM: GET /dapi/v1/premiumIndexKlines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Premium-Index-Kline-Data}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Premium-Index-Kline-Data}
     *
     * @param {string} symbol
     * @param {string} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getPremiumIndexKlines (symbol, interval, startTime, endTime, limit) {
      validateRequiredParameters({ symbol, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/premiumIndexKlines`,
        { symbol, interval, startTime, endTime, limit }
      )
    }

    /**
     * Get klines for a specific pair and contract type.
     *
     * UM: GET /fapi/v1/continuousKlines
     * CM: GET /dapi/v1/continuousKlines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Continuous-Contract-Kline-Candlestick-Data}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Continuous-Contract-Kline-Candlestick-Data}
     *
     * @param {string} pair
     * @param {string} contractType
     * @param {string} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getContinuousKlines (
      pair,
      contractType,
      interval,
      startTime,
      endTime,
      limit
    ) {
      validateRequiredParameters({ pair, contractType, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/continuousKlines`,
        { pair, contractType, interval, startTime, endTime, limit }
      )
    }

    /**
     * Get index price klines.
     *
     * UM: GET /fapi/v1/indexPriceKlines
     * CM: GET /dapi/v1/indexPriceKlines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Index-Price-Kline-Candlestick-Data}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Index-Price-Kline-Candlestick-Data}
     *
     * @param {string} pair
     * @param {string} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getIndexPriceKlines (pair, interval, startTime, endTime, limit) {
      validateRequiredParameters({ pair, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/indexPriceKlines`,
        { pair, interval, startTime, endTime, limit }
      )
    }

    /**
     * 24 hour rolling window price change statistics.
     *
     * UM: GET /fapi/v1/ticker/24hr
     * CM: GET /dapi/v1/ticker/24hr
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/24hr-Ticker-Price-Change-Statistics}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/24hr-Ticker-Price-Change-Statistics}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string} [options.pair]
     */
    get24hrTicker (symbol, pair) {
      if (symbol && pair) {
        throw new Error(
          'Invalid parameters. You can only use "pair" OR "symbol", not both.'
        )
      }
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/ticker/24hr`,
        { symbol, pair }
      )
    }

    /**
     * Latest price for a symbol or symbols.
     *
     * UM: GET /fapi/v1/ticker/price
     * CM: GET /dapi/v1/ticker/price
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Price-Ticker}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Symbol-Price-Ticker}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string} [options.pair]
     */
    getPriceTicker (symbol, pair) {
      if (symbol && pair) {
        throw new Error(
          'Invalid parameters. You can only use "pair" OR "symbol", not both.'
        )
      }
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/ticker/price`,
        { symbol, pair }
      )
    }

    /**
     * Best price/qty on the order book for a symbol or symbols.
     *
     * UM: GET /fapi/v1/ticker/bookTicker
     * CM: GET /dapi/v1/ticker/bookTicker
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Order-Book-Ticker}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Symbol-Order-Book-Ticker}
     *
     * @param {object} [options]
     * @param {string} [options.symbol]
     * @param {string} [options.pair]
     */
    getBookTicker (symbol, pair) {
      if (symbol && pair) {
        throw new Error(
          'Invalid parameters. You can only use "pair" OR "symbol", not both.'
        )
      }
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/ticker/bookTicker`,
        { symbol, pair }
      )
    }

    /**
     * Get present open interest of a specific symbol.
     *
     * UM: GET /fapi/v1/openInterest
     * CM: GET /dapi/v1/openInterest
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Open-Interest}
     *
     * @param {string} symbol
     */
    getOpenInterest (symbol) {
      validateRequiredParameters({ symbol })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/openInterest`,
        { symbol }
      )
    }

    /**
     * Kline/candlestick bars for the mark price of a symbol.
     * Klines are uniquely identified by their open time.
     *
     * UM: GET /fapi/v1/markPriceKlines
     * CM: GET /dapi/v1/markPriceKlines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price-Kline-Candlestick-Data}
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Mark-Price-Kline-Candlestick-Data}
     *
     * @param {string} pair
     * @param {string} interval
     * @param {object} [options]
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
     * @param {number} [options.limit] - Default 500, max 1000
     */
    getMarkPriceKlines (symbol, interval, startTime, endTime, limit) {
      validateRequiredParameters({ symbol, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/markPriceKlines`,
        { symbol, interval, startTime, endTime, limit }
      )
    }
  }

module.exports = Market
