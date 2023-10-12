const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#placeMultipleOrders', () => {
  it('throw MissingParameterError when missing batchOrders', () => {
    expect(() => {
      CMFuturesClient.placeMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should place multiple orders', () => {
    const batchOrders = [{}, {}]

    nockPostMock(CMFuturesClient.baseURL)(
      `/dapi/v1/batchOrders?${buildQueryString({ batchOrders })}`
    )(mockResponse)

    return CMFuturesClient.placeMultipleOrders(batchOrders).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
