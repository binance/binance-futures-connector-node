/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getOpenInterestStatistics', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getOpenInterestStatistics()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        UMFuturesClient.getOpenInterestStatistics('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return open interest statistics', () => {
    const symbol = 'BTCUSDT'
    const period = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/openInterestHist?symbol=${symbol}&period=${period}`
    )(mockResponse)

    return UMFuturesClient.getOpenInterestStatistics(symbol, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
