const { nockPostMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#createListenKey', () => {
  it('should create a listen key', () => {
    nockPostMock(CMFuturesClient.baseURL)('/dapi/v1/listenKey')(mockResponse)

    return CMFuturesClient.createListenKey().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
