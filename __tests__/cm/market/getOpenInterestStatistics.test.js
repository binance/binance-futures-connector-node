/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getOpenInterestStatistics', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.getOpenInterestStatistics()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.getOpenInterestStatistics('BTCUSD')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return open interest statistics', () => {
    const pair = 'BTCUSD'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/openInterestHist?pair=${pair}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.getOpenInterestStatistics(pair, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
