/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#topTraderLongShortAccountRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.topTraderLongShortAccountRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        UMFuturesClient.topTraderLongShortAccountRatio('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return top trader long short account ratio', () => {
    const symbol = 'BNBUSDT'
    const period = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/topLongShortAccountRatio?symbol=${symbol}&period=${period}`
    )(mockResponse)

    return UMFuturesClient.topTraderLongShortAccountRatio(symbol, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
