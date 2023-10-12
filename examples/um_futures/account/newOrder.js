const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .newOrder('BNBUSDT', 'BUY', 'LIMIT')
  .then((response) => console.log(response))
  .catch(console.error)
