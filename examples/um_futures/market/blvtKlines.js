const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .blvtKlines('BTCUSDT', '5m')
  .then((response) => console.log(response))
  .catch(console.error)
