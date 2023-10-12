/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#topTraderLongShortPositionRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.topTraderLongShortPositionRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.topTraderLongShortPositionRatio('BNBUSD')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return top trader long short position ratio', () => {
    const pair = 'BNBUSD'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/topLongShortPositionRatio?pair=${pair}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.topTraderLongShortPositionRatio(pair, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
