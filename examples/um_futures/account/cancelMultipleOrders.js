const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

const batchOrders = [
  {
    symbol: 'BNBUSDT',
    orderId: 52
  },
  {
    symbol: 'BNBUSDT',
    orderId: 53
  }
]

umFuturesClient
  .cancelMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
