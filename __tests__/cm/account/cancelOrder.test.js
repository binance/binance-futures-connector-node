const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockDeleteMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#cancelOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.cancelOrder('')
    }).toThrow(MissingParameterError)
  })

  it('should cancel an order', () => {
    const symbol = 'BTCUSD_PERP'

    nockDeleteMock(CMFuturesClient.baseURL)(
      `/dapi/v1/order?${buildQueryString({ symbol })}`
    )(mockResponse)

    return CMFuturesClient.cancelOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
