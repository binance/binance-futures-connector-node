/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getDepth', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        CMFuturesClient.getDepth()
      }).toThrow(MissingParameterError)
    })
  })

  it('should return depth data', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(`/dapi/v1/depth?symbol=${symbol}`)(
      mockResponse
    )

    return CMFuturesClient.getDepth(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
