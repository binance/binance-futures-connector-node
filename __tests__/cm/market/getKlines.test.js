/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        CMFuturesClient.getKlines('BTCUSD_PERP')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return klines data', () => {
    const symbol = 'BTCUSD_PERP'
    const interval = '1m'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/klines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return CMFuturesClient.getKlines(symbol, interval).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
