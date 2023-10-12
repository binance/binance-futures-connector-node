/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getHistoricalTrades', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getHistoricalTrades()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return historical trades data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/historicalTrades?symbol=${symbol}`
    )(mockResponse)

    return UMFuturesClient.getHistoricalTrades(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
