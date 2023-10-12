const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionADLQuantileEstimation', () => {
  it('should get position ADL quantile estimation', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/adlQuantile')(mockResponse)

    return UMFuturesClient.getPositionADLQuantileEstimation().then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
