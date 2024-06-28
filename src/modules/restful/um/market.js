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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#open-interest-statistics}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#top-trader-long-short-ratio-accounts}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#top-trader-long-short-ratio-positions}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#long-short-ratio}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#taker-buy-sell-volume}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#quarterly-contract-settlement-price}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#historical-blvt-nav-kline-candlestick}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#symbol-price-ticker-v2}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#composite-index-symbol-information}
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
     * {@link https://binance-docs.github.io/apidocs/futures/en/#multi-assets-mode-asset-index}
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
