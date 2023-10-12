'use strict'

const FuturesBaseStream = require('./FuturesBaseStream')
const { isEmptyValue } = require('../../helpers/utils')

class CMStream extends FuturesBaseStream {
  constructor (options = {}) {
    super(options)
    this.wsURL = options.wsURL || 'wss://dstream.binance.com'
  }

  /**
   * Index Price Stream<br>
   *
   * Stream Name: &lt;pair&gt;@indexPrice or &lt;pair&gt;@indexPrice@1s<br>
   * Update Speed: 3000ms or 1000ms<br>
   *
   * @param {string} pair
   * @param {string} interval - if not provided, the default interval is 3 seconds
   */
  indexPriceStream (pair, interval) {
    let stream = `${pair.toLowerCase()}@indexPrice`
    if (!isEmptyValue(interval)) {
      stream = `${pair.toLowerCase()}@indexPrice@1s`
    }
    this.subscribe(stream)
  }

  /**
   * Mark Price All Symbols Of Pair Stream<br>
   *
   * Stream Name: &lt;pair&gt;@markPrice or &lt;pair&gt;@markPrice@1s<br>
   * Update Speed: 3000ms or 1000ms<br>
   *
   * @param {string} pair
   * @param {string} interval - if not provided, the default interval is 3 seconds
   */
  markPriceAllSymbolsOfPairStream (pair, interval) {
    let stream = `${pair.toLowerCase()}@markPrice`
    if (!isEmptyValue(interval)) {
      stream = `${pair.toLowerCase()}@markPrice@1s`
    }
    this.subscribe(stream)
  }

  /**
   * Index Kline Stream<br>
   *
   * Stream Name: &lt;pair&gt;@indexPriceKline_&lt;interval&gt;<br>
   * Update Speed: 250ms<br>
   *
   * @param {string} pair
   * @param {string} interval
   */
  indexKlineStream (pair, interval) {
    const stream = `${pair.toLowerCase()}@indexPriceKline_${interval}`
    this.subscribe(stream)
  }
}

module.exports = CMStream
