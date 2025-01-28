const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionInformationV2', () => {
  it('should get position information v2', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v2/positionRisk')(mockResponse)

    return UMFuturesClient.getPositionInformationV2().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
