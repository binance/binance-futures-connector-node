'use strict'

const { Console } = require('console')

const UMStream = require('../../../src/modules/websocket/UMStream')
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: (data) => logger.info(data)
}

// Connect to websocket server in combine mode, the stream name will be returned in response messages
const websocketStreamClient = new UMStream({
  logger,
  callbacks,
  combinedStreams: true
})

// subscribe to 1m bnbusdt individual symbol ticker stream
websocketStreamClient.individualSymbolTickerStreams('bnbusdt', '1m')

// subscribe to 1m btcusdt individual symbol ticker stream
setTimeout(() => {
  websocketStreamClient.individualSymbolTickerStreams('btcusdt', '1m')
}, 5000)

// disconnect from websocket server
setTimeout(() => websocketStreamClient.disconnect(), 100000)
