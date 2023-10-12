const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .queryOrder('BNBUSD_PERP', {
    orderId: 52
  })
  .then((response) => console.log(response))
  .catch(console.error)
