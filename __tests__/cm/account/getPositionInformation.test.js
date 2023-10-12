const {
  nockMock,
  CMFuturesClient,
  buildQueryString
} = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getPositionInformation', () => {
  it('should get position information', () => {
    options = {
      pair: 'BTCUSD'
    }

    nockMock(CMFuturesClient.baseURL)(
      `/dapi/v1/positionRisk?${buildQueryString(options)}`
    )(mockResponse)

    return CMFuturesClient.getPositionInformation(options).then((response) => {
      expect(response).toBeDefined()
      expect(response.data).toEqual(mockResponse)
    })
  })
})
