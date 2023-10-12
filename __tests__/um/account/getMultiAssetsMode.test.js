const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getMultiAssetsMode', () => {
  it('should get multi assets mode', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/multiAssetsMargin')(
      mockResponse
    )

    return UMFuturesClient.getMultiAssetsMode().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
