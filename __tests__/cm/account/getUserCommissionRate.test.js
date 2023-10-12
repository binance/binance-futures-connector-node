const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getUserCommissionRate', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.getUserCommissionRate()
    }).toThrow(MissingParameterError)
  })

  it('should get user commission rate', () => {
    const symbol = 'BTCUSD_PERP'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/commissionRate?symbol=${symbol}`
    )(mockResponse)

    return CMFuturesClient.getUserCommissionRate(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
