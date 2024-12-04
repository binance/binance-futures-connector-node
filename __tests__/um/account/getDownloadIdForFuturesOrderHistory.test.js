const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getDownloadIdForFuturesOrderHistory', () => {
  it('throw MissingParameterError when missing startTime and endTime', () => {
    expect(() => {
      UMFuturesClient.getDownloadIdForFuturesOrderHistory()
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing endTime', () => {
    expect(() => {
      UMFuturesClient.getDownloadIdForFuturesOrderHistory(1624640367000)
    }).toThrow(MissingParameterError)
  })

  it('should get download id for futures order history', () => {
    const startTime = 1624640367000
    const endTime = 1624726767000
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order/asyn?startTime=${startTime}&endTime=${endTime}`
    )(mockResponse)

    return UMFuturesClient.getDownloadIdForFuturesOrderHistory(
      startTime,
      endTime
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
