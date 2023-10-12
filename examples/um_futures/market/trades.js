const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getTrades('BTCUSDT', 5)
  .then((response) => console.log(response))
  .catch(console.error)
