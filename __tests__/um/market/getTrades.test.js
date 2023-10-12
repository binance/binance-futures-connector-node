/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getTrades', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getTrades()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return trades data', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/trades?symbol=${symbol}`)(
      mockResponse
    )

    return UMFuturesClient.getTrades(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
