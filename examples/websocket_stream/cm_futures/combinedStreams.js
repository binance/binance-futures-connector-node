'use strict'

const { Console } = require('console')

const CMStream = require('../../../src/modules/websocket/CMStream')
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: (data) => logger.info(data)
}

// Connect to websocket server in combine mode, the stream name will be returned in response messages
const websocketStreamClient = new CMStream({
  logger,
  callbacks,
  combinedStreams: true
})

// subscribe to 1m ethusd_perp individual symbol ticker stream
websocketStreamClient.individualSymbolTickerStreams('ethusd_perp', '1m')

// subscribe to 1m btcusd_perp individual symbol ticker stream
setTimeout(() => {
  websocketStreamClient.individualSymbolTickerStreams('btcusd_perp', '1m')
}, 5000)

// disconnect from websocket server
setTimeout(() => websocketStreamClient.disconnect(), 100000)
