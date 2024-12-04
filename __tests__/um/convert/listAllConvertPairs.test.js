/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#listAllConvertPairs', () => {
  describe('throw MissingParameterError', () => {
    it('missing fromAsset and toAsset', () => {
      expect(() => {
        UMFuturesClient.listAllConvertPairs()
      }).toThrow('Either fromAsset or toAsset should be provided')
    })
  })

  it('should return all convertible token pairs', () => {
    const fromAsset = 'BNB'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/convert/exchangeInfo?fromAsset=${fromAsset}`)(
      mockResponse
    )

    return UMFuturesClient.listAllConvertPairs({fromAsset}).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
