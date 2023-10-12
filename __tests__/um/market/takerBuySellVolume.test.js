/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#takerBuySellVolume', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.takerBuySellVolume()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        UMFuturesClient.takerBuySellVolume('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return taker buy sell volume', () => {
    const symbol = 'BNBUSDT'
    const period = '5m'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/takerlongshortRatio?symbol=${symbol}&period=${period}`
    )(mockResponse)

    return UMFuturesClient.takerBuySellVolume(symbol, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
