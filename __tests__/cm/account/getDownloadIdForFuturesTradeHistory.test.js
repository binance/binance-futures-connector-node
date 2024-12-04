const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getDownloadIdForFuturesTradeHistory', () => {
  it('throw MissingParameterError when missing startTime and endtime', () => {
    expect(() => {
      CMFuturesClient.getDownloadIdForFuturesTradeHistory()
    }).toThrow(MissingParameterError)
  })

  it('throw MissingParameterError when missing endTime', () => {
    expect(() => {
      CMFuturesClient.getDownloadIdForFuturesTradeHistory(1624640367000)
    }).toThrow(MissingParameterError)
  })

  it('should get download id for futures trade history', () => {
    const startTime = 1624640367000
    const endTime = 1624726767000
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/trade/asyn?startTime=${startTime}&endTime=${endTime}`
    )(mockResponse)

    return CMFuturesClient.getDownloadIdForFuturesTradeHistory(
      startTime,
      endTime
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
