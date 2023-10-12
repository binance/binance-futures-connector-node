const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAccountInformationV2', () => {
  it('should get account information v2', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v2/account')(mockResponse)

    return UMFuturesClient.getAccountInformationV2().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
