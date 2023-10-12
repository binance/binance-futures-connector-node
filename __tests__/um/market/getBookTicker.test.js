const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getBookTicker', () => {
  it('should return book ticker data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/ticker/bookTicker?symbol=${symbol}`
    )(mockResponse)

    return UMFuturesClient.getBookTicker(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
