const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#get24hrTicker', () => {
  it('should return 24hr ticker data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/ticker/24hr?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.get24hrTicker(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
