const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesTransactionHistoryDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      CMFuturesClient.getFuturesTransactionHistoryDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures transaction history download link by Id', () => {
    const downloadId = '12345'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/income/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return CMFuturesClient.getFuturesTransactionHistoryDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
