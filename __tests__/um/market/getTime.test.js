const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#time', () => {
  it('should return server time', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/time')(mockResponse)

    return UMFuturesClient.getTime().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
