/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#aggTrades', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getAggTrades()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return agg trades', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/aggTrades?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.getAggTrades(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
