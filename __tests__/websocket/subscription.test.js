/* global describe, it, expect, jest */
const UMFutures = require('../../src/um_futures')

describe('#subscribe', () => {
  it('should connect to test server when subscribe', (done) => {
    const LocalSpotClient = new UMFutures('', '', {
      wsURL: 'ws://localhost:9000'
    })
    try {
      const wsRef = LocalSpotClient.subscribe(LocalSpotClient.wsURL, {
        open: () => {
          wsRef.ws.send('New message')
        },
        message: (msg) => {
          expect(msg).toEqual('New connection established.')
          LocalSpotClient.unsubscribe(wsRef)
          done()
        }
      })
    } catch (error) {
      done(error)
    }
  })
})
