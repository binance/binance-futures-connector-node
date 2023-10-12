/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getMarkPriceKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getMarkPriceKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.getMarkPriceKlines('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return mark price klines', () => {
    const symbol = 'BTCUSDT'
    const interval = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/markPriceKlines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.getMarkPriceKlines(symbol, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
