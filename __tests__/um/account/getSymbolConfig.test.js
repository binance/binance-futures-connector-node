const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getSymbolConfig', () => {
  it('should get current account symbol configuration', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/symbolConfig')(
      mockResponse
    )

    return UMFuturesClient.getSymbolConfig().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
