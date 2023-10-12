const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getBookTicker('BTCUSDT')
  .then((response) => console.log(response))
  .catch(console.error)
