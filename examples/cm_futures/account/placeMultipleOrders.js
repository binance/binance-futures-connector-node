const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

const batchOrders = [
  {
    symbol: 'BNBUSD_PERP',
    side: 'BUY',
    type: 'LIMIT',
    quantity: 1,
    price: 0.001,
    timeInForce: 'GTC'
  },
  {
    symbol: 'BNBUSD_PERP',
    side: 'SELL',
    type: 'LIMIT',
    quantity: 1,
    price: 0.002,
    timeInForce: 'GTC'
  }
]

cmFuturesClient
  .placeMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
