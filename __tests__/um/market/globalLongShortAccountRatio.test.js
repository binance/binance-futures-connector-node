/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#globalLongShortAccountRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.globalLongShortAccountRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        UMFuturesClient.globalLongShortAccountRatio('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return global long short account ratio', () => {
    const symbol = 'BNBUSDT'
    const period = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/globalLongShortAccountRatio?symbol=${symbol}&period=${period}`
    )(mockResponse)

    return UMFuturesClient.globalLongShortAccountRatio(symbol, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
