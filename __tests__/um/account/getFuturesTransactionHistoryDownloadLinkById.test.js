const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesTransactionHistoryDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      UMFuturesClient.getFuturesTransactionHistoryDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures transaction history download link by Id', () => {
    const downloadId = '12345'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/income/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return UMFuturesClient.getFuturesTransactionHistoryDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
