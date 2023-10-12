'use strict'

const FuturesBaseStream = require('./FuturesBaseStream')
const { isEmptyValue } = require('../../helpers/utils')

class UMStream extends FuturesBaseStream {
  constructor (options = {}) {
    super(options)
    this.wsURL = options.wsURL || 'wss://fstream.binance.com'
  }

  /**
   * All Market Mark Price Stream<br>
   *
   * Mark price and funding rate for all symbols pushed every 3 seconds or every second.<br>
   *
   * Stream Name: !markPrice@arr or !markPrice@arr@1s<br>
   * Update Speed: 3000ms or 1000ms<br>
   *
   * @param {string} interval - if not provided, the default interval is 3 seconds
   */
  allMarketMarkPriceStream (interval) {
    let stream = '!markPrice@arr'
    if (!isEmptyValue(interval)) {
      stream = '!markPrice@arr@1s'
    }
    this.subscribe(stream)
  }

  /**
   * Composite Index Symbol Info Stream<br>
   *
   * Composite index information for index symbols pushed every second.<br>
   *
   * Stream Name: &lt;symbol&gt;@compositeIndex<br>
   * Update Speed: 1000ms<br>
   *
   * @param {string} symbol
   */
  compositeIndexSymbolInfoStream (symbol) {
    const stream = `${symbol.toLowerCase()}@compositeIndex`
    this.subscribe(stream)
  }
}

module.exports = UMStream
