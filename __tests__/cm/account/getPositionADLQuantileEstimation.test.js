const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionADLQuantileEstimation', () => {
  it('should get position ADL quantile estimation', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/adlQuantile')(mockResponse)

    return CMFuturesClient.getPositionADLQuantileEstimation().then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
