const { UMFutures } = require('../../../src')

const umFuturesClient = new UMFutures('', '', {
  baseURL: 'https://fapi.binance.com'
})

umFuturesClient
  .indexInfo()
  .then(({ data }) => console.log(JSON.stringify(data)))
  .catch(console.error)
