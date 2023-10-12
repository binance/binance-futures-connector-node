const { nockPutMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#renewListenKey', () => {
  it('should renew a listen key', () => {
    nockPutMock(CMFuturesClient.baseURL)(
      '/dapi/v1/listenKey?listenKey=dummyListenKey'
    )(mockResponse)

    return CMFuturesClient.renewListenKey('dummyListenKey').then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
