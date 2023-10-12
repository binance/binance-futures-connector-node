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
     * Test Connectivity<br>
     *
     * UM: GET /fapi/v1/ping<br>
     * CM: GET /dapi/v1/ping<br>
     *
     * Test connectivity to the Rest API.<br>
     * {@link https://binance-docs.github.io/apidocs/futures/en/#test-connectivity}
     */
    ping () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/ping`
      )
    }

    /**
     * Test Connectivity<br>
     *
     * UM: GET /fapi/v1/time<br>
     * CM: GET /dapi/v1/time<br>
     *
     * Test connectivity to the Rest API and get the current server time.<br>
     * {@link https://binance-docs.github.io/apidocs/futures/en/#check-server-time}
     */
    getTime () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/time`
      )
    }

    /**
     * Get Exchange Information<br>
     *
     * UM: GET /fapi/v1/exchangeInfo<br>
     * CM: GET /dapi/v1/exchangeInfo<br>
     *
     * Get current exchange trading rules and symbol information.<br>
     * {@link https://binance-docs.github.io/apidocs/futures/en/#exchange-information}
     */
    getExchangeInfo () {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/exchangeInfo`
      )
    }

    /**
     * Get Order Book<br>
     *
     * UM: GET /fapi/v1/depth<br>
     * CM: GET /dapi/v1/depth<br>
     *
     * Get the Order Book for a specific symbol.<br>
     * {@link https://binance-docs.github.io/apidocs/futures/en/#order-book}
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
     * UM: GET /fapi/v1/trades<br>
     * CM: GET /dapi/v1/trades<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#recent-trades-list}
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
     * UM: GET /fapi/v1/historicalTrades<br>
     * CM: GET /dapi/v1/historicalTrades<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#old-trades-lookup-market_data}
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
     * UM: GET /fapi/v1/aggTrades<br>
     * CM: GET /dapi/v1/aggTrades<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#compressed-aggregate-trades-list}
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
     * UM: GET /fapi/v1/klines<br>
     * CM: GET /dapi/v1/klines<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#kline-candlestick-data}
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
     * UM: GET /fapi/v1/premiumIndex<br>
     * CM: GET /dapi/v1/premiumIndex<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-premium-index-funding-rate}
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
     * UM: GET /fapi/v1/fundingRate<br>
     * CM: GET /dapi/v1/fundingRate<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-funding-rate-history}
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
     * UM: GET /fapi/v1/premiumIndexKlines<br>
     * CM: GET /dapi/v1/premiumIndexKlines<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#get-premium-index-klines}
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
     * UM: GET /fapi/v1/continuousKlines<br>
     * CM: GET /dapi/v1/continuousKlines<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#continuous-contract-kline-candlestick-data}
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
     * UM: GET /fapi/v1/indexPriceKlines<br>
     * CM: GET /dapi/v1/indexPriceKlines<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#index-price-kline-candlestick-data}
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
     * UM: GET /fapi/v1/ticker/24hr<br>
     * CM: GET /dapi/v1/ticker/24hr<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#24hr-ticker-price-change-statistics}
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
     * UM: GET /fapi/v1/ticker/price<br>
     * CM: GET /dapi/v1/ticker/price<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#symbol-price-ticker}
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
     * UM: GET /fapi/v1/ticker/bookTicker<br>
     * CM: GET /dapi/v1/ticker/bookTicker<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#symbol-order-book-ticker}
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
     * UM: GET /fapi/v1/openInterest<br>
     * CM: GET /dapi/v1/openInterest<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#open-interest}
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
     * UM: GET /fapi/v1/markPriceKlines<br>
     * CM: GET /dapi/v1/markPriceKlines<br>
     *
     * {@link https://binance-docs.github.io/apidocs/futures/en/#mark-price-kline-candlestick-data}
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
