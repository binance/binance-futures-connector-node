const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyIsolatedPositionMargin', () => {
  const symbol = 'BTCUSDT'
  const amount = 10
  const type = 1
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.modifyIsolatedPositionMargin('', amount, type)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing amount', () => {
    expect(() => {
      UMFuturesClient.modifyIsolatedPositionMargin(symbol, '', type)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing type', () => {
    expect(() => {
      UMFuturesClient.modifyIsolatedPositionMargin(symbol, amount)
    }).toThrow(MissingParameterError)
  })

  it('should modify isolated position margin', () => {
    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/positionMargin?symbol=${symbol}&amount=${amount}&type=${type}`
    )(mockResponse)

    return UMFuturesClient.modifyIsolatedPositionMargin(
      symbol,
      amount,
      type
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
