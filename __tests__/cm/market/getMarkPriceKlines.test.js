/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getMarkPriceKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getMarkPriceKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        CMFuturesClient.getMarkPriceKlines('BTCUSD_PERP')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return mark price klines', () => {
    const symbol = 'BTCUSD_PERP'
    const interval = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/markPriceKlines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return CMFuturesClient.getMarkPriceKlines(symbol, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
