const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')

describe('#ping', () => {
  it('should test API response', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/ping')({})

    return UMFuturesClient.ping().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual({})
    })
  })
})
