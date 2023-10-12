const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionMode', () => {
  it('should get position mode', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/positionSide/dual')(
      mockResponse
    )

    return UMFuturesClient.getPositionMode().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
