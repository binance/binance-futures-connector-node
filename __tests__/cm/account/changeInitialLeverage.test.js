const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changeInitialLeverage', () => {
  const symbol = 'BTCUSD_PERP'
  const leverage = 10

  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      CMFuturesClient.changeInitialLeverage('', leverage)
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing leverage', () => {
    expect(() => {
      CMFuturesClient.changeInitialLeverage(symbol)
    }).toThrow(MissingParameterError)
  })

  it('should change initial leverage', () => {
    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/leverage?symbol=${symbol}&leverage=${leverage}`
    )(mockResponse)

    return CMFuturesClient.changeInitialLeverage(symbol, leverage).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
