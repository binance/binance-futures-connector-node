const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPutMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#modifyMultipleOrders', () => {
  it('throw MissingParameterError when missing batchOrders', () => {
    expect(() => {
      UMFuturesClient.modifyMultipleOrders()
    }).toThrow(MissingParameterError)
  })

  it('should modify multiple orders', () => {
    const batchOrders = [{}, {}, {}]

    nockPutMock(UMFuturesClient.baseURL)(
      `/fapi/v1/batchOrders?${buildQueryString({ batchOrders })}`
    )(mockResponse)

    return UMFuturesClient.modifyMultipleOrders(batchOrders).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
