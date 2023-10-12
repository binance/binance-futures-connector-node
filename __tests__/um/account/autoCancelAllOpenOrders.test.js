const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#autoCancelAllOpenOrders', () => {
  it('throw MissingParameterError when missing symbol or countdownTime', () => {
    expect(() => {
      UMFuturesClient.autoCancelAllOpenOrders()
    }).toThrow(MissingParameterError)
  })

  it('should auto cancel all open orders', () => {
    const symbol = 'BTCUSDT'
    const countdownTime = 60000

    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/countdownCancelAll?${buildQueryString({
        symbol,
        countdownTime
      })}`
    )(mockResponse)

    return UMFuturesClient.autoCancelAllOpenOrders(symbol, countdownTime).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
