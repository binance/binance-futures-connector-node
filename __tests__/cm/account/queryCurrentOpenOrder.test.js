const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#queryCurrentOpenOrder', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.queryCurrentOpenOrder()
    }).toThrow(MissingParameterError)
  })

  it('should query current open order', () => {
    const symbol = 'BTCUSD_PERP'

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/openOrder?${buildQueryString({ symbol })}`
    )(mockResponse)

    return CMFuturesClient.queryCurrentOpenOrder(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
