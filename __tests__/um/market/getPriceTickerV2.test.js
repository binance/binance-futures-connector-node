const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPriceTickerV2', () => {
  it('should return price ticker data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v2/ticker/price?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.getPriceTickerV2(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
