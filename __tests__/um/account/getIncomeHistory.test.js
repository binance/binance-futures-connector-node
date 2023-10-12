const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getIncomeHistory', () => {
  it('should get income history', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/income')(mockResponse)

    return UMFuturesClient.getIncomeHistory().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
