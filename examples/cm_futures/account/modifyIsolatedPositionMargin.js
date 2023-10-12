const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .modifyIsolatedPositionMargin('BNBUSD_PERP', 2, 1)
  .then((response) => console.log(response))
  .catch(console.error)
