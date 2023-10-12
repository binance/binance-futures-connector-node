const MissingParameterError = require('../../../src/error/missingParameterError')
const {
  nockPostMock,
  UMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#changeMultiAssetsMode', () => {
  it('throw MissingParameterError when missing symbol', () => {
    expect(() => {
      UMFuturesClient.changeMultiAssetsMode('')
    }).toThrow(MissingParameterError)
  })

  it('should change multi assets mode', () => {
    const multiAssetsMargin = 'true'

    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/multiAssetsMargin?${buildQueryString({ multiAssetsMargin })}`
    )(mockResponse)

    return UMFuturesClient.changeMultiAssetsMode(multiAssetsMargin).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
