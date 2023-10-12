const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

const batchOrders = [
  {
    symbol: 'BNBUSD_PERP',
    side: 'BUY'
  },
  {
    symbol: 'BNBUSD_PERP',
    side: 'SELL'
  }
]

cmFuturesClient
  .modifyMultipleOrders(batchOrders)
  .then((response) => console.log(response))
  .catch(console.error)
