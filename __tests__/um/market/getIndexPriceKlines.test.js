const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getIndexPriceKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        UMFuturesClient.getIndexPriceKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.getIndexPriceKlines('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return index price klines data', () => {
    const pair = 'BTCUSDT'
    const interval = '1m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/indexPriceKlines?pair=${pair}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.getIndexPriceKlines(pair, interval).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
