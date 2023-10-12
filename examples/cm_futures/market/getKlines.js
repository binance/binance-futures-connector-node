const { CMFutures } = require('../../../src')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getKlines('BTCUSD_PERP', '1m')
  .then((response) => console.log(response))
  .catch(console.error)
