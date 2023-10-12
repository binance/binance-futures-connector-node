const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .newOrder('BNBUSD_PERP', 'BUY', 'LIMIT', {
    timeInForce: 'GTC',
    quantity: 1,
    price: 0.001
  })
  .then((response) => console.log(response))
  .catch(console.error)
