const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#newOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.newOrder('', 'BUY', 'LIMIT')
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing side', () => {
    expect(() => {
      CMFuturesClient.newOrder('BTCUSD_PERP', '', 'LIMIT')
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing type', () => {
    expect(() => {
      CMFuturesClient.newOrder('BTCUSD_PERP', 'BUY', '')
    }).toThrow(MissingParameterError)
  })

  it('should create a new order', () => {
    const symbol = 'BTCUSD_PERP'
    const side = 'BUY'
    const type = 'LIMIT'

    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/order?${buildQueryString({ symbol, side, type })}`
    )(mockResponse)

    return CMFuturesClient.newOrder(symbol, side, type).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
