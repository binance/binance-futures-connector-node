/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getExchangeInfo', () => {
  it('should return exchange info', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/exchangeInfo')(mockResponse)

    return UMFuturesClient.getExchangeInfo().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
