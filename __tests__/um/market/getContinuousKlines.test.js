const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getContinuousKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        UMFuturesClient.getContinuousKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing contractType', () => {
      expect(() => {
        UMFuturesClient.getContinuousKlines('BTCUSDT')
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        UMFuturesClient.getContinuousKlines('BTCUSDT', 'PERPETUAL')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return continuous klines data', () => {
    const pair = 'BTCUSDT'
    const contractType = 'PERPETUAL'
    const interval = '1m'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/continuousKlines?pair=${pair}&contractType=${contractType}&interval=${interval}`
    )(mockResponse)

    return UMFuturesClient.getContinuousKlines(
      pair,
      contractType,
      interval
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
