const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getCurrentAllOpenOrders', () => {
  it('should get current all open orders', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/openOrders')(mockResponse)

    return CMFuturesClient.getCurrentAllOpenOrders().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
