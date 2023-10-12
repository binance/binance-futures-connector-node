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
    quantity: 1,
    price: 0.001
  },
  {
    symbol: 'BNBUSDT',
    side: 'SELL',
    quantity: 1,
    price: 0.002
  }
]

umFuturesClient
  .modifyMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
