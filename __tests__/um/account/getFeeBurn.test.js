const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFeeBurn', () => {
  it('should return BNB burn status', () => {
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/feeBurn`)(
      mockResponse
    )

    return UMFuturesClient.getFeeBurn().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
