const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockDeleteMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#cancelMultipleOrders', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.cancelMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should cancel multiple orders', () => {
    const symbol = 'BTCUSD_PERP'

    nockDeleteMock(CMFuturesClient.baseURL)(
      `/dapi/v1/batchOrders?${buildQueryString({ symbol })}`
    )(mockResponse)

    return CMFuturesClient.cancelMultipleOrders(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
