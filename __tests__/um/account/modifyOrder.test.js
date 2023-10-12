const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPutMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyOrder', () => {
  describe('throw MissingParameterError', () => {
    it('missing symbol', () => {
      expect(() => {
        UMFuturesClient.modifyOrder()
      }).toThrow(MissingParameterError)
    })
  })

  it('should modify an order', () => {
    const symbol = 'BTCUSDT'
    const side = 'SELL'
    const quantity = 1
    const price = 9000
    nockPutMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order?symbol=${symbol}&side=${side}&quantity=${quantity}&price=${price}`
    )(mockResponse)

    return UMFuturesClient.modifyOrder(symbol, side, quantity, price).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
