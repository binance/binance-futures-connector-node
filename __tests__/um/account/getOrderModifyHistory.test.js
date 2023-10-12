const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getOrderModifyHistory', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.getOrderModifyHistory()
    }).toThrow(MissingParameterError)
  })

  it('should get order modification history', () => {
    const symbol = 'BTCUSDT'

    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/orderAmendment?${buildQueryString({ symbol })}`
    )(mockResponse)

    return UMFuturesClient.getOrderModifyHistory(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
