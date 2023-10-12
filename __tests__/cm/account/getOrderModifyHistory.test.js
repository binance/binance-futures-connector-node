const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getOrderModifyHistory', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.getOrderModifyHistory()
    }).toThrow(MissingParameterError)
  })

  it('should get order modification history', () => {
    const symbol = 'BTCUSD_PERP'

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/orderAmendment?${buildQueryString({ symbol })}`
    )(mockResponse)

    return CMFuturesClient.getOrderModifyHistory(symbol).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
