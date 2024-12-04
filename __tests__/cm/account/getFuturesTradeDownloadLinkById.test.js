const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getFuturesTradeDownloadLinkById', () => {
  it('throw MissingParameterError when missing downloadId', () => {
    expect(() => {
      CMFuturesClient.getFuturesTradeDownloadLinkById()
    }).toThrow(MissingParameterError)
  })

  it('should get futures trade download link by Id', () => {
    const downloadId = '12345'
    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/trade/asyn/id?downloadId=${downloadId}`
    )(mockResponse)

    return CMFuturesClient.getFuturesTradeDownloadLinkById(
      downloadId
    ).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
