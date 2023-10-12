const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getUsersForceOrders', () => {
  it('should get users force orders', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/forceOrders')(mockResponse)

    return UMFuturesClient.getUsersForceOrders().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
