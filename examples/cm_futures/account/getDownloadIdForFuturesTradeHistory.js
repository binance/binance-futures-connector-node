const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getDownloadIdForFuturesTradeHistory(1645009771000, 1645009771100)
  .then((response) => console.log(response))
  .catch(console.error)
