/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#sendQuoteRequest', () => {
  describe('throw MissingParameterError', () => {
    it('missing parameters', () => {
      expect(() => {
        UMFuturesClient.sendQuoteRequest()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return a quote for the requested token pairs', () => {
    const fromAsset = 'BNB'
    const toAsset = 'USDT'
    const fromAmount = 1

    nockPostMock(UMFuturesClient.baseURL)(
        `/fapi/v1/convert/getQuote?${buildQueryString({ fromAsset, toAsset, fromAmount})}`
    )(mockResponse)

    return UMFuturesClient.sendQuoteRequest(fromAsset, toAsset, {fromAmount}).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
