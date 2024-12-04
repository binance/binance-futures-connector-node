/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const {
    nockPostMock,
    UMFuturesClient,
    buildQueryString
  } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#acceptQuote', () => {
  describe('throw MissingParameterError', () => {
    it('missing quoteId', () => {
      expect(() => {
        UMFuturesClient.acceptQuote()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return the accepted offered quote', () => {
    const quoteId = '1234'
    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/convert/acceptQuote?${buildQueryString({quoteId})}`)(
      mockResponse
    )

    return UMFuturesClient.acceptQuote(quoteId).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
