const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAllOrders', () => {
  it('throw MissingParameterError when missing symbol or pair', () => {
    expect(() => {
      CMFuturesClient.getAllOrders()
    }).toThrow(MissingParameterError)
  })

  it('should get all orders', () => {
    options = {
      symbol: 'BTCUSD_PERP'
    }

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/allOrders?${buildQueryString(options)}`
    )(mockResponse)

    return CMFuturesClient.getAllOrders(options).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
