/* global describe, it, expect */
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFundingRate', () => {
  it('should return funding rate data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/fundingRate?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.getFundingRate(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
