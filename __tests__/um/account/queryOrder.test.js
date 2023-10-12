const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#queryOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.queryOrder()
    }).toThrow(MissingParameterError)
  })

  it('should query an order', () => {
    const symbol = 'BTCUSDT'

    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.queryOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
