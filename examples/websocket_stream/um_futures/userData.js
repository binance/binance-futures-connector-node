'use strict'

const { Console } = require('console')

const UMStream = require('../../../src/modules/websocket/UMStream')
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: (data) => logger.info(data)
}

const websocketStreamClient = new UMStream({ logger, callbacks })

// Replace with your listenKey
const listenKey = 'YOUR_LISTEN_KEY'

websocketStreamClient.userDataStream(listenKey)

setTimeout(() => websocketStreamClient.disconnect(), 60000)
