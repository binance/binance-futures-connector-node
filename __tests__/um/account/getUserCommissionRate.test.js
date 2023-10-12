const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getUserCommissionRate', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.getUserCommissionRate()
    }).toThrow(MissingParameterError)
  })

  it('should get user commission rate', () => {
    const symbol = 'BTCUSDT'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/commissionRate?symbol=${symbol}`
    )(mockResponse)

    return UMFuturesClient.getUserCommissionRate(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
