const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getCurrentAllOpenOrders', () => {
  it('should get current all open orders', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/openOrders')(mockResponse)

    return UMFuturesClient.getCurrentAllOpenOrders().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
