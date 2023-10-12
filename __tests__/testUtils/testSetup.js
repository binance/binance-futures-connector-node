const nock = require('nock')
const { UMFutures } = require('../../src/index')
const { CMFutures } = require('../../src/index')
const UMStream = require('../../src/modules/websocket/UMStream')
const { buildQueryString } = require('../../src/helpers/utils')

const UMFuturesClient = new UMFutures({ baseURL: 'https://fapi.binance.com' })
const CMFuturesClient = new CMFutures({ baseURL: 'https://dapi.binance.com' })

const filterPath = (path) => {
  const pathList = path.split('?')
  if (pathList.length <= 1) {
    return path
  }
  const params = pathList[1].split('&')
  const filteredParams = params.filter(
    (param) => !param.startsWith('timestamp') && !param.startsWith('signature')
  )
  return filteredParams.length >= 1
    ? `${pathList[0]}?${filteredParams.join('&')}`
    : pathList[0]
}

const nockMock = (baseURL) => (urlPath) => (responseData) => {
  nock(baseURL)
    .filteringPath((path) => filterPath(path))
    .get(urlPath)
    .reply(200, responseData)
}

const nockPostMock = (baseURL) => (urlPath) => (responseData) => {
  nock(baseURL)
    .filteringPath((path) => filterPath(path))
    .post(urlPath)
    .reply(200, responseData)
}

const nockDeleteMock = (baseURL) => (urlPath) => (responseData) => {
  nock(baseURL)
    .filteringPath((path) => filterPath(path))
    .delete(urlPath)
    .reply(200, responseData)
}

const nockPutMock = (baseURL) => (urlPath) => (responseData) => {
  nock(baseURL)
    .filteringPath((path) => filterPath(path))
    .put(urlPath)
    .reply(200, responseData)
}

const websocketStreamClient = new UMStream({ wsURL: 'ws://localhost:9000' })

const mockSubscription = (targetUrl, mockResponse) => {
  websocketStreamClient.subscribe = new Proxy(websocketStreamClient.subscribe, {
    apply: function (target, thisArg, [url]) {
      targetUrl = targetUrl.replace('?', '\\?')
      if (url.match(new RegExp(`${targetUrl}$`))) {
        return mockResponse
      }
      console.log(url)
      return new Error('URL mismatch')
    }
  })
}

module.exports = {
  nockMock,
  nockPostMock,
  nockDeleteMock,
  nockPutMock,
  buildQueryString,
  mockSubscription,
  UMFuturesClient,
  CMFuturesClient,
  websocketStreamClient
}
