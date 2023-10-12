/* global describe, it, expect */
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFundingRate', () => {
  it('should return funding rate data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/fundingRate?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.getFundingRate(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
