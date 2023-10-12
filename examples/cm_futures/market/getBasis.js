const { CMFutures } = require('../../../src')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getBasis('BTCUSD', 'PERPETUAL', '5m')
  .then((response) => console.log(response))
  .catch(console.error)
