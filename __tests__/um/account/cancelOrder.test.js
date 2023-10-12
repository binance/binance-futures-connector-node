const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockDeleteMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#cancelOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.cancelOrder('')
    }).toThrow(MissingParameterError)
  })

  it('should cancel an order', () => {
    const symbol = 'BTCUSDT'

    nockDeleteMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.cancelOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
