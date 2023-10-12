/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#topTraderLongShortAccountRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.topTraderLongShortAccountRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.topTraderLongShortAccountRatio('BTCUSD')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return top trader long short account ratio', () => {
    const pair = 'BTCUSD'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/topLongShortAccountRatio?pair=${pair}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.topTraderLongShortAccountRatio(pair, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
