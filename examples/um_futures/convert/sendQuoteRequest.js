const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .sendQuoteRequest('BNB', 'USDT', { fromAmount: 1.0 })
  .then((response) => console.log(response.data))
  .catch(console.error)
