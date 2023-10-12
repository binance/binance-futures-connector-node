const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getDepth('BTCUSDT', 5)
  .then((response) => console.log(response))
  .catch(console.error)
