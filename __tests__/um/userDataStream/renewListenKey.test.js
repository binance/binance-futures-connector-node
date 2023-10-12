const {
  nockPutMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#renewListenKey', () => {
  it('should renew a listen key', () => {
    const listenKey = 'dummyListenKey'
    nockPutMock(UMFuturesClient.baseURL)(
      '/fapi/v1/listenKey?listenKey=dummyListenKey'
    )(mockResponse)

    return UMFuturesClient.renewListenKey(listenKey).then((response) => {
      expect(response).toBeDefined()
    })
  })
})
