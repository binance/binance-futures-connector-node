/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#globalLongShortAccountRatio', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.globalLongShortAccountRatio()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.globalLongShortAccountRatio('BNBUSDT')
      }).toThrow(MissingParameterError)
    })
  })

  it('should return global long short account ratio', () => {
    const pair = 'BNBUSDT'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/globalLongShortAccountRatio?pair=${pair}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.globalLongShortAccountRatio(pair, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
