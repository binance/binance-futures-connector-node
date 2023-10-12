const { CMFutures } = require('../../../src')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getDepth('BTCUSD_PERP', 5)
  .then((response) => console.log(response))
  .catch(console.error)
