const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesOrderHistoryDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      CMFuturesClient.getFuturesOrderHistoryDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures order history download link by Id', () => {
    const downloadId = '12345'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/order/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return CMFuturesClient.getFuturesOrderHistoryDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
