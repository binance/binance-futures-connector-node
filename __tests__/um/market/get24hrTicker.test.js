const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#get24hrTicker', () => {
  it('should return 24hr ticker data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/ticker/24hr?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.get24hrTicker(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
