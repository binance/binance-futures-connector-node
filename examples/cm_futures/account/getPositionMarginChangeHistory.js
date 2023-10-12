const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getPositionMarginChangeHistory('BTCUSDT')
  .then((response) => console.log(response))
  .catch(console.error)
