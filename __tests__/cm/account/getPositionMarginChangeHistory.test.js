const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionMarginChangeHistory', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.getPositionMarginChangeHistory()
    }).toThrow(MissingParameterError)
  })

  it('should get position margin change history', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/positionMargin/history?symbol=${symbol}`
    )(mockResponse)

    return CMFuturesClient.getPositionMarginChangeHistory(symbol).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
