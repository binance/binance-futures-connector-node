const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changeInitialLeverage', () => {
  const symbol = 'BTCUSDT'
  const leverage = 10

  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.changeInitialLeverage('', leverage)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing leverage', () => {
    expect(() => {
      UMFuturesClient.changeInitialLeverage(symbol)
    }).toThrow(MissingParameterError)
  })

  it('should change initial leverage', () => {
    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/leverage?symbol=${symbol}&leverage=${leverage}`
    )(mockResponse)

    return UMFuturesClient.changeInitialLeverage(symbol, leverage).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
