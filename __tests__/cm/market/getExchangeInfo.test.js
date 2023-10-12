/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getExchangeInfo', () => {
  it('should return exchange info', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v1/exchangeInfo')(mockResponse)

    return CMFuturesClient.getExchangeInfo().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
