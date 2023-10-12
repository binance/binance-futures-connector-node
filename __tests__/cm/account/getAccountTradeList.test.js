const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getAccountTradeList', () => {
  it('should get account trade list', () => {
    options = {
      symbol: 'BTCUSD_PERP'
    }

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/userTrades?${buildQueryString(options)}`
    )(mockResponse)

    return CMFuturesClient.getAccountTradeList(options).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
