const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAccountInformation', () => {
  it('should get account information', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/account')(mockResponse)

    return CMFuturesClient.getAccountInformation().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
