const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getUsersForceOrders', () => {
  it('should get users force orders', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/forceOrders')(mockResponse)

    return CMFuturesClient.getUsersForceOrders().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
