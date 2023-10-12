const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPutMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyMultipleOrders', () => {
  it('throw MissingParameterError when missing batchOrders', () => {
    expect(() => {
      CMFuturesClient.modifyMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should modify multiple orders', () => {
    const batchOrders = [
      { symbol: 'BTCUSD_PERP', side: 'BUY' },
      { symbol: 'ETHUSD_PERP', side: 'SELL' }
    ]

    nockPutMock(CMFuturesClient.baseURL)(
      `/dapi/v1/batchOrders?${buildQueryString({ batchOrders })}`
    )(mockResponse)

    return CMFuturesClient.modifyMultipleOrders(batchOrders).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
