const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPriceTicker', () => {
  it('should return price ticker data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/ticker/price?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.getPriceTicker(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
