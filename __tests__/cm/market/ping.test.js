const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')

describe('#ping', () => {
  it('should test API response', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/ping')({})

    return CMFuturesClient.ping().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual({})
    })
  })
})
