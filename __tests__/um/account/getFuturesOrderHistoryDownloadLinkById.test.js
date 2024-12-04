const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesOrderHistoryDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      UMFuturesClient.getFuturesOrderHistoryDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures order history download link by Id', () => {
    const downloadId = '12345'
    nockMock(UMFuturesClient.baseURL)(
      `/fapi/v1/order/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return UMFuturesClient.getFuturesOrderHistoryDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
