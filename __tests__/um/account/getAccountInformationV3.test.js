const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAccountInformationV3', () => {
  it('should get current account information', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v3/account')(
      mockResponse
    )

    return UMFuturesClient.getAccountInformationV3().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
