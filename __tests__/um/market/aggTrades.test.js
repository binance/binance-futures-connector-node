/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#aggTrades', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getAggTrades()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return agg trades', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/aggTrades?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.getAggTrades(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
