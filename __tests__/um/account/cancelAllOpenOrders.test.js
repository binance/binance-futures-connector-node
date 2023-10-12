const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockDeleteMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#cancelAllOpenOrders', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.cancelAllOpenOrders()
    }).toThrow(MissingParameterError)
  })

  it('should cancel all open orders', () => {
    const symbol = 'BTCUSDT'

    nockDeleteMock(UMFuturesClient.baseURL)(
      `/fapi/v1/allOpenOrders?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.cancelAllOpenOrders(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
