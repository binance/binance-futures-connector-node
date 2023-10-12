const {
  nockDeleteMock,
  CMFuturesClient
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#closeListenKey', () => {
  it('should close a listen key', () => {
    nockDeleteMock(CMFuturesClient.baseURL)(
      '/dapi/v1/listenKey?listenKey=dummyListenKey'
    )(mockResponse)

    return CMFuturesClient.closeListenKey('dummyListenKey').then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
