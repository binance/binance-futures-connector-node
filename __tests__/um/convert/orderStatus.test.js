/* global describe, it, expect */
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#orderStatus', () => {
  describe('throw Error', () => {
    it('missing orderId', () => {
      expect(() => {
        UMFuturesClient.orderStatus()
      }).toThrow('Either fromAsset or toAsset should be provided')
    })
  })

  it('should return order status', () => {
    const orderId = '12345'
    nockMock(UMFuturesClient.baseURL)(`/fapi/v1/convert/orderStatus?orderId=${orderId}`)(
      mockResponse
    )

    return UMFuturesClient.orderStatus({orderId}).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
