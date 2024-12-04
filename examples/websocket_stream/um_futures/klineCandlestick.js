'use strict'

const { Console } = require('console')

const { UMStream } = require('../../../src')
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: (data) => logger.info(data)
}

const websocketStreamClient = new UMStream({ logger, callbacks })

websocketStreamClient.klineCandlestickStream('bnbusdt', '1m')

setTimeout(() => websocketStreamClient.disconnect(), 20000)
