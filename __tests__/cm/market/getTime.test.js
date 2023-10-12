const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#time', () => {
  it('should return server time', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/time')(mockResponse)

    return CMFuturesClient.getTime().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
