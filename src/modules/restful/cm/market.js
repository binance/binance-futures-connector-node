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
     *
     * @param {string} pair
     * @param {string} contractType - ALL, CURRENT_QUARTER, NEXT_QUARTER, PERPETUAL
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
     *
     * @param {string} pair
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
     *
     * @param {string} pair
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
     *
     * @param {string} pair
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
     *
     * @param {string} pair
     * @param {string} contractType - ALL, CURRENT_QUARTER, NEXT_QUARTER, PERPETUAL
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
     *
     * @param {string} pair
     * @param {string} contractType - ALL, CURRENT_QUARTER, NEXT_QUARTER, PERPETUAL
     * @param {string} period - 5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 1d
     * @param {object} [options]
     * @param {number} [options.limit] - Default 30, Max 500
     * @param {number} [options.startTime]
     * @param {number} [options.endTime]
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
