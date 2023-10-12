const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, UMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getNotionalAndLeverageBrackets', () => {
  it('should get notional and leverage brackets', () => {
    nockMock(UMFuturesClient.baseURL)('/fapi/v1/leverageBracket')(mockResponse)

    return UMFuturesClient.getNotionalAndLeverageBrackets().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
