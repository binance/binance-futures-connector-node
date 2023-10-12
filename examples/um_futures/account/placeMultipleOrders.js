const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

const batchOrders = [
  {
    symbol: 'BNBUSDT',
    side: 'BUY',
    type: 'LIMIT',
    quantity: 1,
    price: 0.001
  },
  {
    symbol: 'BNBUSDT',
    side: 'SELL',
    type: 'LIMIT',
    quantity: 1,
    price: 0.002
  }
]

umFuturesClient
  .placeMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
