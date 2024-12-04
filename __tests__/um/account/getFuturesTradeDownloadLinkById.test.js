const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesTradeDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      UMFuturesClient.getFuturesTradeDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures trade download link by Id', () => {
    const downloadId = '12345'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/trade/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return UMFuturesClient.getFuturesTradeDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
