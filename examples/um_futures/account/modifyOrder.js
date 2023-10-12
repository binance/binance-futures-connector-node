const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .modifyOrder('BNBUSDT', 'BUY', 1, 0.001)
  .then((response) => console.log(response))
  .catch(console.error)
