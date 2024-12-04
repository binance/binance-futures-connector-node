const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getDownloadIdForFuturesTransactionHistory', () => {
  it('throw MissingParameterError when missing startTime and endTime', () => {
    expect(() => {
      UMFuturesClient.getDownloadIdForFuturesTransactionHistory()
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing endTime', () => {
    expect(() => {
      UMFuturesClient.getDownloadIdForFuturesTransactionHistory(1624640367000)
    }).toThrow(MissingParameterError)
  })

  it('should get download id for futures transaction history', () => {
    const startTime = 1624640367000
    const endTime = 1624726767000
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/income/asyn?startTime=${startTime}&endTime=${endTime}`
    )(mockResponse)

    return UMFuturesClient.getDownloadIdForFuturesTransactionHistory(
      startTime,
      endTime
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
