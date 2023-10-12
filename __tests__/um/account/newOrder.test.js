const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#newOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.newOrder('', 'BUY', 'LIMIT')
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing side', () => {
    expect(() => {
      UMFuturesClient.newOrder('BTCUSDT', '', 'LIMIT')
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing type', () => {
    expect(() => {
      UMFuturesClient.newOrder('BTCUSDT', 'BUY', '')
    }).toThrow(MissingParameterError)
  })

  it('should create a new order', () => {
    const symbol = 'BTCUSDT'
    const side = 'BUY'
    const type = 'LIMIT'

    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order?${buildQueryString({ symbol, side, type })}`
    )(mockResponse)

    return UMFuturesClient.newOrder(symbol, side, type).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
