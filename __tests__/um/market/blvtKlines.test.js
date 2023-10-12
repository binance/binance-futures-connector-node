/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#blvtKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.blvtKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.blvtKlines('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return BLVT klines', () => {
    const symbol = 'BNBUSDT'
    const interval = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/lvtKlines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.blvtKlines(symbol, interval).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
