const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#placeMultipleOrders', () => {
  it('throw MissingParameterError when missing batchOrders', () => {
    expect(() => {
      UMFuturesClient.placeMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should place multiple orders', () => {
    const batchOrders = [{}, {}]

    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/batchOrders?${buildQueryString({ batchOrders })}`
    )(mockResponse)

    return UMFuturesClient.placeMultipleOrders(batchOrders).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
