/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getHistoricalTrades', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getHistoricalTrades()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return historical trades data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/historicalTrades?symbol=${symbol}`
    )(mockResponse)

    return CMFuturesClient.getHistoricalTrades(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
