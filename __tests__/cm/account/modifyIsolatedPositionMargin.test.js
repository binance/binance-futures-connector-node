const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyIsolatedPositionMargin', () => {
  const symbol = 'BTCUSD_PERP'
  const amount = 10
  const type = 1
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.modifyIsolatedPositionMargin('', amount, type)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing amount', () => {
    expect(() => {
      CMFuturesClient.modifyIsolatedPositionMargin(symbol, '', type)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing type', () => {
    expect(() => {
      CMFuturesClient.modifyIsolatedPositionMargin(symbol, amount)
    }).toThrow(MissingParameterError)
  })

  it('should modify isolated position margin', () => {
    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/positionMargin?symbol=${symbol}&amount=${amount}&type=${type}`
    )(mockResponse)

    return CMFuturesClient.modifyIsolatedPositionMargin(
      symbol,
      amount,
      type
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
