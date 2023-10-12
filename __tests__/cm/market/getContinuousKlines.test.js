const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getContinuousKlines', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.getContinuousKlines()
      }).toThrow(MissingParameterError)
    })
    it('missing contractType', () => {
      expect(() => {
        CMFuturesClient.getContinuousKlines('BTCUSD_PERP')
      }).toThrow(MissingParameterError)
    })
    it('missing interval', () => {
      expect(() => {
        CMFuturesClient.getContinuousKlines('BTCUSD_PERP', 'PERPETUAL')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return continuous klines data', () => {
    const pair = 'BTCUSD_PERP'
    const contractType = 'PERPETUAL'
    const interval = '1m'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/continuousKlines?pair=${pair}&contractType=${contractType}&interval=${interval}`
    )(mockResponse)

    return CMFuturesClient.getContinuousKlines(
      pair,
      contractType,
      interval
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
