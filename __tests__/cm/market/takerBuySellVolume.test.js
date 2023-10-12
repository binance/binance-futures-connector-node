/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#takerBuySellVolume', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.takerBuySellVolume()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.takerBuySellVolume('BTCUSD')
      }).toThrow(MissingParameterError)
    })
    it('missing contractType', () => {
      expect(() => {
        CMFuturesClient.takerBuySellVolume({ pair: 'BTCUSD', period: '5m' })
      }).toThrow(MissingParameterError)
    })
  })

  it('should return taker buy sell volume', () => {
    const pair = 'BTCUSD'
    const contractType = 'PERPETUAL'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/takerBuySellVol?pair=${pair}&contractType=${contractType}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.takerBuySellVolume(pair, contractType, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
