const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getBookTicker', () => {
  it('should return book ticker data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/ticker/bookTicker?symbol=${symbol}`
    )(mockResponse)

    return CMFuturesClient.getBookTicker(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
