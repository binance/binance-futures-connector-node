const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getIncomeHistory', () => {
  it('should get income history', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/income')(mockResponse)

    return CMFuturesClient.getIncomeHistory().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
