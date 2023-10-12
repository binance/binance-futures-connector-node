const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPutMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyOrder', () => {
  it('throw MissingParameterError when missing symbol and side', () => {
    expect(() => {
      CMFuturesClient.modifyOrder()
    }).toThrow(MissingParameterError)
  })

  it('should modify an order', () => {
    const symbol = 'BTCUSD_PERP'
    const side = 'BUY'

    nockPutMock(CMFuturesClient.baseURL)(
      `/dapi/v1/order?${buildQueryString({ symbol, side })}`
    )(mockResponse)

    return CMFuturesClient.modifyOrder(symbol, side).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
