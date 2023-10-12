const {
  nockDeleteMock,
  UMFuturesClient
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#closeListenKey', () => {
  it('should close a listen key', () => {
    nockDeleteMock(UMFuturesClient.baseURL)(
      '/fapi/v1/listenKey?listenKey=dummyListenKey'
    )(mockResponse)

    return UMFuturesClient.closeListenKey('dummyListenKey').then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
