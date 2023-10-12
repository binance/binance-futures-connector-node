const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .autoCancelAllOpenOrders('BNBUSDT', 100000)
  .then((response) => console.log(response))
  .catch(console.error)
