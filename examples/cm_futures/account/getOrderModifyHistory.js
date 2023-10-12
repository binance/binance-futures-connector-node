const { CMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getOrderModifyHistory('BNBUSD_PERP', { orderId: '123123213' })
  .then((response) => console.log(response))
  .catch(console.error)
