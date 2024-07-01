/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#deliveryPrice', () => {
  describe('throw MissingParameterError', () => {
    it('missing pair', () => {
      expect(() => {
        UMFuturesClient.deliveryPrice()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return quarterly contract settlement price', () => {
    const pair = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(
      `/futures/data/delivery-price?pair=${pair}`
    )(mockResponse)

    return UMFuturesClient.deliveryPrice(pair).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
