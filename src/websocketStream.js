'use strict'

const WebsocketBase = require('./websocketBase')

class WebsocketStream extends WebsocketBase {
  constructor (options = {}) {
    super(options)
    this.wsURL = options.wsURL
    this.combinedStreams = options.combinedStreams || false
  }

  _prepareURL (stream) {
    let url = `${this.wsURL}/ws/${stream}`
    if (this.combinedStreams) {
      url = `${this.wsURL}/stream?streams=${stream}`
    }
    return url
  }

  subscribe (stream) {
    if (!this.isConnected()) {
      const url = this._prepareURL(stream)
      this.initConnect(url)
    } else {
      if (!Array.isArray(stream)) {
        stream = [stream]
      }
      const payload = {
        method: 'SUBSCRIBE',
        params: stream.map((s) => s.toLowerCase()),
        id: Date.now()
      }

      this.logger.info('SUBSCRIBE', payload)
      this.send(JSON.stringify(payload))
    }
  }

  unsubscribe (stream) {
    if (!this.isConnected()) {
      // Make log message more useful:
      this.logger.warn('There is no current connection to unsubscribe.')
    } else {
      if (!Array.isArray(stream)) {
        stream = [stream]
      }
      const payload = {
        method: 'UNSUBSCRIBE',
        params: stream.map((s) => s.toLowerCase()),
        id: Date.now()
      }
      this.logger.info('UNSUBSCRIBE', payload)
      this.send(JSON.stringify(payload))
    }
  }
}

module.exports = WebsocketStream
