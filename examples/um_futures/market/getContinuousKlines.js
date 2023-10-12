const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getContinuousKlines('BTCUSDT', 'PERPETUAL', '1m')
  .then((response) => console.log(response))
  .catch(console.error)
