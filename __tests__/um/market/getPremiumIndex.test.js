/* global describe, it, expect */
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPremiumIndex', () => {
  it('should return premium index data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/premiumIndex?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.getPremiumIndex(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
