const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#queryOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.queryOrder()
    }).toThrow(MissingParameterError)
  })

  it('should query an order', () => {
    const symbol = 'BTCUSD_PERP'

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/order?${buildQueryString({ symbol })}`
    )(mockResponse)

    return CMFuturesClient.queryOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
