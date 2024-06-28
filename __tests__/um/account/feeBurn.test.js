const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockPostMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#feeBurn', () => {
  const feeBurn = 'true'

  it('throw MissingParameterError when missing feeBurn', () => {
    expect(() => {
      UMFuturesClient.feeBurn()
    }).toThrow(MissingParameterError)
  })

  it('should change user\'s BNB fee discount on every symbol', () => {
    nockPostMock(UMFuturesClient.baseURL)(
      `/fapi/v1/feeBurn?feeBurn=${feeBurn}`
    )(mockResponse)

    return UMFuturesClient.feeBurn(feeBurn).then(
      (response) => {
        expect(response).toBeDefined()
        expect(response.data).toEqual(mockResponse)
      }
    )
  })
})
