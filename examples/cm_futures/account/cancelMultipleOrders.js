const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

const batchOrders = [
  {
    symbol: 'BNBUSD_PERP',
    orderId: 52
  },
  {
    symbol: 'BNBUSD_PERP',
    orderId: 53
  }
]

cmFuturesClient
  .cancelMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
