const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#autoCancelAllOpenOrders', () => {
  it('throw MissingParameterError when missing symbol or countdownTime', () => {
    expect(() => {
      CMFuturesClient.autoCancelAllOpenOrders()
    }).toThrow(MissingParameterError)
  })

  it('should auto cancel all open orders', () => {
    const symbol = 'BTCUSD_PERP'
    const countdownTime = 60000

    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/countdownCancelAll?${buildQueryString({
        symbol,
        countdownTime
      })}`
    )(mockResponse)

    return CMFuturesClient.autoCancelAllOpenOrders(symbol, countdownTime).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
