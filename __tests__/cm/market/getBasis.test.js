/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getBasis', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        CMFuturesClient.getBasis()
      }).toThrow(MissingParameterError)
    })
    it('missing period', () => {
      expect(() => {
        CMFuturesClient.getBasis('BNBUSD')
      }).toThrow(MissingParameterError)
    })
    it('missing contractType', () => {
      expect(() => {
        CMFuturesClient.getBasis({ pair: 'BNBUSD', period: '5m' })
      }).toThrow(MissingParameterError)
    })
  })

  it('should return taker buy sell volume', () => {
    const pair = 'BNBUSD'
    const contractType = 'PERP'
    const period = '5m'
    nockMock(CMFuturesClient.baseURL)(
      `/futures/data/basis?pair=${pair}&contractType=${contractType}&period=${period}`
    )(mockResponse)

    return CMFuturesClient.getBasis(pair, contractType, period).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
