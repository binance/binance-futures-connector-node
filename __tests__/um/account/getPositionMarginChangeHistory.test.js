const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionMarginChangeHistory', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.getPositionMarginChangeHistory()
    }).toThrow(MissingParameterError)
  })

  it('should get position margin change history', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/positionMargin/history?symbol=${symbol}`
    )(mockResponse)

    return UMFuturesClient.getPositionMarginChangeHistory(symbol).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
