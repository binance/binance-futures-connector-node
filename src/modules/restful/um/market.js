const BaseMarket = require('../base/market')
const { validateRequiredParameters } = require('../../../helpers/validation')

/**
 * API market endpoints
 * @module Market
 * @param {*} superclass
 */
const Market = (superclass) =>
  class extends BaseMarket(superclass) {
    constructor (baseURL, ...args) {
      super(...args)
      this.baseURL = baseURL
      this.product = 'fapi'
    }

    /**
     * Open Interest History
     *
     * GET /futures/data/openInterestHist
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Open-Interest-Statistics}
     */
    getOpenInterestStatistics (symbol, period, limit, startTime, endTime) {
      validateRequiredParameters({ symbol, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/openInterestHist`,
        { symbol, period, limit, startTime, endTime }
      )
    }

    /**
     * Top Trader Long/Short Ratio (Accounts)
     *
     * GET /futures/data/topLongShortAccountRatio
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Top-Long-Short-Account-Ratio}
     */
    topTraderLongShortAccountRatio (symbol, period, limit, startTime, endTime) {
      validateRequiredParameters({ symbol, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/topLongShortAccountRatio`,
        { symbol, period, limit, startTime, endTime }
      )
    }

    /**
     * Top Trader Long/Short Ratio (Positions)
     *
     * GET /futures/data/topLongShortPositionRatio
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Top-Trader-Long-Short-Ratio}
     */
    topTraderLongShortPositionRatio (symbol, period, limit, startTime, endTime) {
      validateRequiredParameters({ symbol, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/topLongShortPositionRatio`,
        { symbol, period, limit, startTime, endTime }
      )
    }

    /**
     * Long/Short Ratio
     *
     * GET /futures/data/globalLongShortAccountRatio
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Long-Short-Ratio}
     */
    globalLongShortAccountRatio (symbol, period, limit, startTime, endTime) {
      validateRequiredParameters({ symbol, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/globalLongShortAccountRatio`,
        { symbol, period, limit, startTime, endTime }
      )
    }

    /**
     * Taker Buy/Sell Volume
     *
     * GET /futures/data/takerlongshortRatio
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Taker-BuySell-Volume}
     */
    takerBuySellVolume (symbol, period, limit, startTime, endTime) {
      validateRequiredParameters({ symbol, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/takerlongshortRatio`,
        { symbol, period, limit, startTime, endTime }
      )
    }

    /**
     * Quarterly Contract Settlement Price
     *
     * GET /futures/data/delivery-price
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Delivery-Price}
     */
    deliveryPrice (pair) {
      validateRequiredParameters({ pair })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/delivery-price`,
        { pair }
      )
    }

    /**
     * Historical BLVT NAV Kline/Candlestick
     *
     * GET /fapi/v1/lvtKlines
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Historical-BLVT-NAV-Kline-Candlestick}
     */
    blvtKlines (symbol, interval, startTime, endTime, limit) {
      validateRequiredParameters({ symbol, interval })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/lvtKlines`,
        { symbol, interval, startTime, endTime, limit }
      )
    }

    /**
     * Symbol Price Ticker V2
     *
     * GET /fapi/v2/ticker/price
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Price-Ticker-v2}
     */
    getPriceTickerV2 (symbol) {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v2/ticker/price`,
        { symbol }
      )
    }

    /**
     * Composite Index Symbol Information
     *
     * GET /fapi/v1/indexInfo
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Composite-Index-Symbol-Information}
     */
    indexInfo (symbol) {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/indexInfo`,
        { symbol }
      )
    }

    /**
     * Multi-Assets Mode Asset Index
     *
     * GET /fapi/v1/assetIndex
     *
     * {@link https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Multi-Assets-Mode-Asset-Index}
     */
    assetIndex (symbol) {
      return this.publicRequest(
        'GET',
        `${this.baseURL}/${this.product}/v1/assetIndex`,
        { symbol }
      )
    }
  }

module.exports = Market
