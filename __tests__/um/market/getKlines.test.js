/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.getKlines('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return klines data', () => {
    const symbol = 'BTCUSDT'
    const interval = '1m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/klines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.getKlines(symbol, interval).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
