/* global describe, it, expect */
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#assetIndex', () => {
  it('should return asset index', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/assetIndex?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.assetIndex(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
