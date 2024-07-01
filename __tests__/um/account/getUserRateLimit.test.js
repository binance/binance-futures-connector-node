const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getUserRateLimit', () => {
  it('should return user rate limit', () => {
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/rateLimit/order`)(
      mockResponse
    )

    return UMFuturesClient.getUserRateLimit().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
