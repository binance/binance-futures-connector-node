const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .getDownloadIdForFuturesTransactionHistory(1645009771000, 1645009771100)
  .then((response) => console.log(response))
  .catch(console.error)
