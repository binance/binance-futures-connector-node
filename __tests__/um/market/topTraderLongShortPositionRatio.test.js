/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#topTraderLongShortPositionRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.topTraderLongShortPositionRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        UMFuturesClient.topTraderLongShortPositionRatio('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return top trader long short position ratio', () => {
    const symbol = 'BNBUSDT'
    const period = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/topLongShortPositionRatio?symbol=${symbol}&period=${period}`
    )(mockResponse)

    return UMFuturesClient.topTraderLongShortPositionRatio(symbol, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
