const { CMFutures } = require('../../../src')

const cmFuturesClient = new CMFutures('', '', {
  baseURL: 'https://dapi.binance.com'
})

cmFuturesClient
  .getExchangeInfo()
  .then((response) => console.log(response))
  .catch(console.error)
