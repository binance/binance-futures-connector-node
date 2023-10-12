'use strict'
const WebsocketStream = require('../../websocketStream')
const { isEmptyValue } = require('../../helpers/utils')

class FuturesBaseStream extends WebsocketStream {
  constructor (options = {}) {
    super(options)
    this.wsURL = options.wsURL || 'wss://fstream.binance.com'
    this.combinedStreams = options.combinedStreams || false
  }

  /**
   * Aggregate Trade Streams<br>
   *
   * The Aggregate Trade Streams push market trade information that is aggregated for fills with same price and taking side every 100 milliseconds.<br>
   *
   * Stream Name: &lt;symbol&gt;@aggTrade <br>
   * Update Speed: 100ms<br>
   * Only market trades will be aggregated, which means the insurance fund trades and ADL trades won't be aggregated.
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#aggregate-trade-streams}
   *
   * @param {string} symbol
   */
  aggregateTradeStream (symbol) {
    const stream = `${symbol.toLowerCase()}@aggTrade`
    this.subscribe(stream)
  }

  /**
   * Aggregate Trade Streams<br>
   *
   * Mark price and funding rate for a single symbol pushed every 3 seconds or every second.<br>
   *
   * Stream Name: <symbol>@markPrice or <symbol>@markPrice@1s<br>
   * Update Speed: 3000ms or 1000ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#mark-price-stream}
   *
   * @param {string} symbol
   * @param {string} interval - if not provided, the default interval is 3 seconds
   */
  markPriceStream (symbol, interval) {
    let stream = `${symbol.toLowerCase()}@markPrice`
    if (!isEmptyValue(interval)) {
      stream = `${symbol.toLowerCase()}@markPrice@1s`
    }
    this.subscribe(stream)
  }

  /**
   * Kline/Candlestick Stream<br>
   *
   * The Kline/Candlestick Stream push updates to the current klines/candlestick every 250 milliseconds (if existing).<br>
   *
   * Stream Name: &lt;symbol&gt;@kline_&lt;interval&gt;<br>
   * Update Speed: 250ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#kline-candlestick-streams}
   *
   * @param {string} symbol
   * @param {string} interval
   */
  klineCandlestickStream (symbol, interval) {
    const stream = `${symbol.toLowerCase()}@kline_${interval}`
    this.subscribe(stream)
  }

  /**
   * Continuous Contract Kline/Candlestick Stream<br>
   *
   *
   * Stream Name: &lt;pair&gt;_&lt;contractType&gt;@continuousKline_&lt;interval&gt;<br>
   * Update Speed: 250ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#continuous-contract-kline-candlestick-streams}
   *
   * @param {string} pair
   * @param {string} contractType
   * @param {string} interval
   */
  continuousContractKlineCandlestickStream (pair, contractType, interval) {
    const stream = `${pair.toLowerCase()}_${contractType.toLowerCase()}@continuousKline_${interval}`
    this.subscribe(stream)
  }

  /**
   * Individual Symbol Mini Ticker Stream<br>
   *
   * 24hr rolling window mini-ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.<br>
   *
   * Stream Name: &lt;symbol&gt;@miniTicker<br>
   * Update Speed: 500ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#individual-symbol-mini-ticker-streams}
   *
   * @param {string} symbol
   */
  individualSymbolMiniTickerStream (symbol) {
    const stream = `${symbol.toLowerCase()}@miniTicker`
    this.subscribe(stream)
  }

  /**
   * All Market Mini Tickers Stream<br>
   *
   * 24hr rolling window mini-ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.<br>
   *
   * Stream Name: !miniTicker@arr<br>
   * Update Speed: 1000ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#all-market-mini-tickers-streams}
   */
  allMarketMiniTickersStream () {
    const stream = '!miniTicker@arr'
    this.subscribe(stream)
  }

  /**
   * Individual Symbol Ticker Stream<br>
   *
   * 24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.<br>
   *
   * Stream Name: &lt;symbol&gt;@ticker<br>
   * Update Speed: 2000ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#individual-symbol-ticker-streams}
   *
   * @param {string} symbol
   */
  individualSymbolTickerStreams (symbol) {
    const stream = `${symbol.toLowerCase()}@ticker`
    this.subscribe(stream)
  }

  /**
   * All Market Tickers Stream<br>
   *
   * 24hr rolling window ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.<br>
   *
   * Stream Name: !ticker@arr<br>
   * Update Speed: 1000ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#all-market-tickers-streams}
   */
  allMarketTickersStreams () {
    const stream = '!ticker@arr'
    this.subscribe(stream)
  }

  /**
   * Individual Symbol Book Ticker Stream<br>
   *
   * Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.<br>
   *
   * Stream Name: &lt;symbol&gt;@bookTicker<br>
   * Update Speed: real-time<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#individual-symbol-book-ticker-streams}
   *
   * @param {string} symbol
   */
  individualSymbolBookTickerStreams (symbol) {
    const stream = `${symbol.toLowerCase()}@bookTicker`
    this.subscribe(stream)
  }

  /**
   * All Book Tickers Stream<br>
   *
   * Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.<br>
   *
   * Stream Name: !bookTicker<br>
   * Update Speed: real-time<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#all-book-tickers-stream}
   */
  allBookTickersStream () {
    const stream = '!bookTicker'
    this.subscribe(stream)
  }

  /**
   * Liquidation Order Streams<br>
   *
   * The Liquidation Order Snapshot Streams push force liquidation order information for specific symbol. For each symbol，only the latest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.<br>
   *
   * Stream Name: &lt;symbol&gt;@forceOrder<br>
   * Update Speed: 1000ms<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#liquidation-order-streams}
   *
   * @param {string} symbol
   */
  liquidationOrderStreams (symbol) {
    const stream = `${symbol.toLowerCase()}@forceOrder`
    this.subscribe(stream)
  }

  /**
   * All Liquidation Order Snapshot Streams<br>
   *
   * The All Liquidation Order Snapshot Streams push force liquidation order information for all symbols in the market. For each symbol，only the latest one liquidation order within 1000ms will be pushed as the snapshot. If no liquidation happens in the interval of 1000ms, no stream will be pushed.<br>
   *
   * Stream Name: !forceOrder@arr<br>
   * Update Speed: 1000ms<br>
   */
  allMarketLiquidationOrderStreams () {
    const stream = '!forceOrder@arr'
    this.subscribe(stream)
  }

  /**
   * Partial Book Depth Streams<br>
   *
   * Top bids and asks, Valid are 5, 10, or 20.<br>
   *
   * Stream Name: &lt;symbol&gt;@depth&lt;levels&gt;&lt;interval&gt;<br>
   * Update Speed: 250ms, 500ms or 100ms<br>
   *
   * @param {string} symbol
   * @param {number} levels - Valid are 5, 10, or 20
   * @param {string} interval - 500ms or 100ms. If not provided, the default interval is 250ms
   */
  partialBookDepthStreams (symbol, levels, interval = '') {
    const stream = `${symbol.toLowerCase()}@depth${levels}${
      interval ? '@' + interval : ''
    }`
    this.subscribe(stream)
  }

  /**
   * Diff. Book Depth Streams<br>
   *
   * Bids and asks, pushed every 250 milliseconds, 500 milliseconds, 100 milliseconds (if existing)<br>
   *
   * Stream Name: &lt;symbol&gt;@depth&lt;interval&gt;<br>
   * Update Speed: 250ms, 500ms, 100ms<br>
   *
   * @param {string} symbol
   * @param {string} interval - 500ms or 100ms. If not provided, the default interval is 250ms
   */
  diffBookDepthStreams (symbol, interval = '') {
    const stream = `${symbol.toLowerCase()}@depth${
      interval ? '@' + interval : ''
    }`
    this.subscribe(stream)
  }

  /**
   * User Data Stream<br>
   *
   * The User Data Streams push updates to the current user's information every time a trade is executed, an order is placed, an order is canceled, etc.<br>
   *
   * Stream Name: &lt;listenKey&gt;<br>
   * Update Speed: real-time<br>
   *
   * {@link https://binance-docs.github.io/apidocs/futures/en/#user-data-streams}
   * {@link https://binance-docs.github.io/apidocs/delivery/en/#user-data-streams}
   *
   * @param {string} listenKey
   */
  userDataStream (listenKey) {
    this.subscribe(listenKey)
  }
}

module.exports = FuturesBaseStream
