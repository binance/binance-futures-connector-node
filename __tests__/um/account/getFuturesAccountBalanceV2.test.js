const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesAccountBalanceV2', () => {
  it('should get futures account balance v2', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v2/balance')(mockResponse)

    return UMFuturesClient.getFuturesAccountBalanceV2().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
