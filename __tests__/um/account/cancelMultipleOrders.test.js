const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockDeleteMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#cancelMultipleOrders', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.cancelMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should cancel multiple orders', () => {
    const symbol = 'BTCUSDT'

    nockDeleteMock(UMFuturesClient.baseURL)(
      `/fapi/v1/batchOrders?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.cancelMultipleOrders(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
