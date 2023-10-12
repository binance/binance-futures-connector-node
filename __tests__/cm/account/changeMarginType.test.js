const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changeMarginType', () => {
  const symbol = 'BTCUSD_PERP'
  const marginType = 'ISOLATED'

  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.changeMarginType('', marginType)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing marginType', () => {
    expect(() => {
      CMFuturesClient.changeMarginType(symbol)
    }).toThrow(MissingParameterError)
  })

  it('should change margin type', () => {
    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/marginType?symbol=${symbol}&marginType=${marginType}`
    )(mockResponse)

    return CMFuturesClient.changeMarginType(symbol, marginType).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
