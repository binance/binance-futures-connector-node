const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAccountConfig', () => {
  it('should get current account symbol configuration', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/accountConfig')(
      mockResponse
    )

    return UMFuturesClient.getAccountConfig().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
