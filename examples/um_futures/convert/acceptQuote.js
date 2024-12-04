const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .acceptQuote('12345')
  .then((response) => console.log(response.data))
  .catch(console.error)
