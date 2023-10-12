const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesAccountBalance', () => {
  it('should get futures account balance', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/balance')(mockResponse)

    return CMFuturesClient.getFuturesAccountBalance().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
