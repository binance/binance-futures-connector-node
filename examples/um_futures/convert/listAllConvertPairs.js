const { UMFutures } = require('../../../src')

const apiKey = ''
const apiSecret = ''
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .listAllConvertPairs({ fromAsset: 'BNB' })
  .then((response) => console.log(response.data))
  .catch(console.error)
