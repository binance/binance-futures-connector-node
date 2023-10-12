const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changePositionMode', () => {
  it('throw MissingParameterError when missing dualSidePosition', () => {
    expect(() => {
      CMFuturesClient.changePositionMode()
    }).toThrow(MissingParameterError)
  })

  it('should change position mode', () => {
    const dualSidePosition = 'true'

    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/positionSide/dual?${buildQueryString({ dualSidePosition })}`
    )(mockResponse)

    return CMFuturesClient.changePositionMode(dualSidePosition).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
