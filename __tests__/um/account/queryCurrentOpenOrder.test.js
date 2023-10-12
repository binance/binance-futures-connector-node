const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#queryCurrentOpenOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.queryCurrentOpenOrder()
    }).toThrow(MissingParameterError)
  })

  it('should query current open order', () => {
    const symbol = 'BTCUSDT'

    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/openOrder?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.queryCurrentOpenOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
