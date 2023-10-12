const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionMode', () => {
  it('should get position mode', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/positionSide/dual')(
      mockResponse
    )

    return CMFuturesClient.getPositionMode().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
