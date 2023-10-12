const { nockMock, CMFuturesClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getNotionalBracketForSymbol', () => {
  it('should get notional bracket', () => {
    nockMock(CMFuturesClient.baseURL)('/dapi/v2/leverageBracket')(mockResponse)

    return CMFuturesClient.getNotionalBracketForSymbol().then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
