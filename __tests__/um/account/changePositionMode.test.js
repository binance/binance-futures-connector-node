const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changePositionMode', () => {
  it('throw MissingParameterError when missing dualSidePosition', () => {
    expect(() => {
      UMFuturesClient.changePositionMode()
    }).toThrow(MissingParameterError)
  })

  it('should change position mode', () => {
    const dualSidePosition = 'true'

    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/positionSide/dual?${buildQueryString({ dualSidePosition })}`
    )(mockResponse)

    return UMFuturesClient.changePositionMode(dualSidePosition).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
