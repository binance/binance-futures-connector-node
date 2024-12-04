const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesAccountBalanceV3', () => {
  it('should query account balance info', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v3/balance')(
      mockResponse
    )

    return UMFuturesClient.getFuturesAccountBalanceV3().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
