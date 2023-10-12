const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPremiumIndexKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.getPremiumIndexKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.getPremiumIndexKlines('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return premium index klines data', () => {
    const symbol = 'BTCUSDT'
    const interval = '1m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/premiumIndexKlines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.getPremiumIndexKlines(symbol, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
