const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getIndexPriceKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.getIndexPriceKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        CMFuturesClient.getIndexPriceKlines('BTCUSD_PERP')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return index price klines data', () => {
    const pair = 'BTCUSD_PERP'
    const interval = '1m'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/indexPriceKlines?pair=${pair}&interval=${interval}`
    )(mockResponse)

    return CMFuturesClient.getIndexPriceKlines(pair, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
