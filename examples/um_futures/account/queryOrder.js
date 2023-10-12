const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .queryOrder('BNBUSDT', {
    orderId: 52
  })
  .then((response) => console.log(response))
  .catch(console.error)
