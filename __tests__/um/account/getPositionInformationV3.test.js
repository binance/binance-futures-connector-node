const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionInformationV3', () => {
  it('should get current position information', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v3/positionRisk')(mockResponse)

    return UMFuturesClient.getPositionInformationV3().then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
