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
      this.product = 'dapi'
    }

    /**
     * Open Interest History
     *
     * GET /futures/data/openInterestHist<br>
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#open-interest-statistics}
     */
    getOpenInterestStatistics (pair, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/openInterestHist`,
        { pair, period, limit, startTime, endTime }
      )
    }

    /**
     * Top Trader Long/Short Ratio (Accounts)
     *
     * GET /futures/data/topLongShortAccountRatio
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#top-trader-long-short-ratio-accounts}
     */
    topTraderLongShortAccountRatio (pair, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/topLongShortAccountRatio`,
        { pair, period, limit, startTime, endTime }
      )
    }

    /**
     * Top Trader Long/Short Ratio (Positions)
     *
     * GET /futures/data/topLongShortPositionRatio
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#top-trader-long-short-ratio-positions}
     */
    topTraderLongShortPositionRatio (pair, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/topLongShortPositionRatio`,
        { pair, period, limit, startTime, endTime }
      )
    }

    /**
     * Long/Short Ratio
     *
     * GET /futures/data/globalLongShortAccountRatio
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#long-short-ratio}
     */
    globalLongShortAccountRatio (pair, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/globalLongShortAccountRatio`,
        { pair, period, limit, startTime, endTime }
      )
    }

    /**
     * Taker Buy/Sell Volume
     *
     * GET /futures/data/takerBuySellVol
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#taker-buy-sell-volume}
     */
    takerBuySellVolume (pair, contractType, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, contractType, period })
      return this.publicRequest(
        'GET',
        `${this.baseURL}/futures/data/takerBuySellVol`,
        { pair, contractType, period, limit, startTime, endTime }
      )
    }

    /**
     * Basis
     *
     * GET /futures/data/basis
     *
     * {@link https://binance-docs.github.io/apidocs/delivery/en/#basis}
     */
    getBasis (pair, contractType, period, limit, startTime, endTime) {
      validateRequiredParameters({ pair, contractType, period })
      return this.publicRequest('GET', `${this.baseURL}/futures/data/basis`, {
        pair,
        contractType,
        period,
        limit,
        startTime,
        endTime
      })
    }
  }

module.exports = Market
