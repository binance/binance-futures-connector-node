const { nockPostMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#createListenKey', () => {
  it('should create a listen key', () => {
    nockPostMock(UMFuturesClient.baseURL)('/fapi/v1/listenKey')(mockResponse)

    return UMFuturesClient.createListenKey().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
