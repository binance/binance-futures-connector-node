const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPremiumIndexKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getPremiumIndexKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        CMFuturesClient.getPremiumIndexKlines('BTCUSD_PERP')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return premium index klines data', () => {
    const symbol = 'BTCUSD_PERP'
    const interval = '1m'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/premiumIndexKlines?symbol=${symbol}&interval=${interval}`
    )(mockResponse)

    return CMFuturesClient.getPremiumIndexKlines(symbol, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
