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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Open-Interest-Statistics}
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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Top-Long-Short-Account-Ratio}
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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Top-Trader-Long-Short-Ratio}
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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Long-Short-Ratio}
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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Taker-Buy-Sell-Volume}
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
     * {@link https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/Basis}
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
