/* global describe, it, expect */
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPremiumIndex', () => {
  it('should return premium index data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/premiumIndex?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.getPremiumIndex(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
