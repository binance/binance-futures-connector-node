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
    quantity: '1.0',
    price: '599.001',
    timeInForce: 'GTC'
  },
  {
    symbol: 'BNBUSDT',
    side: 'SELL',
    type: 'LIMIT',
    quantity: '1.0',
    price: '599.002',
    timeInForce: 'GTC'
  }
]

umFuturesClient
  .placeMultipleOrders(JSON.stringify(batchOrders))
  .then((response) => console.log(response.data))
  .catch(console.error)
