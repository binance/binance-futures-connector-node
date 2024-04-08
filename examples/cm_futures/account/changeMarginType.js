const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .changeMarginType('BNBUSD_PERP', 'CROSSED')
  .then((response) => console.log(response))
  .catch(console.error)
