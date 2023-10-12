const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changeMarginType', () => {
  const symbol = 'BTCUSDT'
  const marginType = 'ISOLATED'

  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.changeMarginType('', marginType)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing marginType', () => {
    expect(() => {
      UMFuturesClient.changeMarginType(symbol)
    }).toThrow(MissingParameterError)
  })

  it('should change margin type', () => {
    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/marginType?symbol=${symbol}&marginType=${marginType}`
    )(mockResponse)

    return UMFuturesClient.changeMarginType(symbol, marginType).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
