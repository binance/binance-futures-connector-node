# NodeJS Binance Futures Connector

[![npm version](https://badge.fury.io/js/%40binance%2Ffutures-connector.svg)](https://badge.fury.io/js/%40binance%2Ffutures-connector)
[![Node version](https://img.shields.io/node/v/%40binance%2Ffutures-connector.svg?style=flat)](http://nodejs.org/download/)
[![Standard-Js](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a lightweight library that works as a connector to the UM and CM Binance Futures Endpoints. It’s designed to be simple, clean, and easy to use with minimal dependencies.

- Supported APIs:
  - /fapi/\*
  - /dapi/\*
  - UM Futures Websocket Market Stream
  - CM Futures Websocket Market Stream
  - UM Futures User Data Stream
  - CM Futures User Data Stream
- Inclusion of examples
- Customisable base URL
- Support request timeout and HTTP proxy
- Response metadata can be displayed
- Customisable Logger

## Installation

```bash
npm install @binance/futures-connector
```

## Documentation

[https://binance.github.io/binance-futures-connector-node/](https://binance.github.io/binance-futures-connector-node/)

## RESTful APIs

```javascript
const { CMFutures } = require("@binance/futures-connector");

const apiKey = "";
const apiSecret = "";
const cmFuturesClient = new CMFutures(apiKey, apiSecret, {
  baseURL: "https://dapi.binance.com",
});

cmFuturesClient
  .newOrder("BNBUSD_PERP", "BUY", "LIMIT", {
    timeInForce: "GTC",
    quantity: 1,
    price: 0.001,
  })
  .then((response) => console.log(response))
  .catch(console.error);
```

Please find `examples` folder to see the examples for more endpoints.

## RSA Key based Authentication

```javascript
const { UMFutures } = require("@binance/futures-connector");

const apiKey = "";
const apiSecret = ""; // has no effect when RSA private key is provided

// load private key
const privateKey = fs.readFileSync("/Users/john/ssl/private_key_encrypted.pem");
const privateKeyPassphrase = "password";

const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  privateKey,
  privateKeyPassphrase, // only used for encrypted key
});

// Get account information
umFuturesClient
  .getAccountInformation()
  .then((response) => client.logger.log(response.data));
```

### Testnet

You can use the testnet by adjusting the base URL:

```javascript
// provide the testnet base url
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  baseURL: "https://testnet.binancefuture.com",
});
```

### Base URL

If `baseURL` is not provided, it defaults to `fapi.binance.com`.

It's recommended to pass in the `baseURL` parameter to the constructor, so that it can easily be replaced with the testnet baseURL for testing/debugging.

````javascript

```javascript

### Optional Parameters

Optional parameters are encapsulated to a single object as the last function parameter.

```javascript
const { UMFutures } = require('@binance/futures-connector')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

umFuturesClient.getAccountInformation({ recvWindow: 2000 }).then(response => umFuturesClient.logger.log(response.data))

````

### Timeout

It's easy to set timeout in milliseconds in request. If the request take longer than timeout, the request will be aborted. If it's not set, there will be no timeout.

```javascript
const { UMFutures } = require("@binance/futures-connector");

const apiKey = "";
const apiSecret = "";
const umFuturesClient = new UMFutures(apiKey, apiSecret, { timeout: 1000 });

client
  .getAccountInformation()
  .then((response) => umFuturesClient.logger.log(response.data))
  .catch((error) => umFuturesClient.logger.error(error.message));
```

### Proxy

The `axios` package is used as the http client in this library. A proxy settings is passed into `axios` directly, the details can be found at [here](https://github.com/axios/axios#request-config):

```javascript
const { UMFutures } = require("@binance/futures-connector");

const apiKey = "";
const apiSecret = "";
const umFuturesClient = new UMFutures(apiKey, apiSecret, {
  proxy: {
    protocol: "https",
    host: "127.0.0.1",
    port: 9000,
    auth: {
      username: "proxy_user",
      password: "password",
    },
  },
});
```

You may have a HTTP proxy, that can bring the problem that you need to make a HTTPS connection through the HTTP proxy. You can do that by build a HTTPS-over-HTTP tunnel by npm package [tunnel](https://www.npmjs.com/package/tunnel), and then pass the turnnel agent to `httpsAgent` in `axios`.

```javascript
const tunnel = require("tunnel");

const agent = tunnel.httpsOverHttp({
  proxy: {
    host: "127.0.0.1",
    port: 3128,
  },
});

const umFuturesClient = new UMFutures(null, null, {
  baseURL: "https://fapi.binance.com",
  httpsAgent: agent,
});

umFuturesClient
  .getAccountInformation()
  .then((response) => umFuturesClient.logger.log(response.data))
  .catch((error) => umFuturesClient.logger.error(error));
```

[This comment](https://github.com/axios/axios/issues/925#issuecomment-359982190) provides more details.

### Custom Logger Integration

```javascript
const { UMFutures } = require("@binance/futures-connector");
const fs = require("fs");
const { Console } = require("console");

// make sure the logs/ folder is created beforehand
const output = fs.createWriteStream("./logs/stdout.log");
const errorOutput = fs.createWriteStream("./logs/stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });
const umFuturesClient = new UMFutures("", "", { logger: logger });

umFuturesClient
  .getExchangeInfo()
  .then((response) => umFuturesClient.logger.log(response.data));
// check the output file
```

The default logger defined in the package is [Node.js Console class](https://nodejs.org/api/console.html). Its output is sent to `process.stdout` and `process.stderr`, same as the global console.

### Error

There are 2 types of error that may be returned from the API server and the user has to handle it properly:

- `Client error`

  - This is thrown when server returns `4XX`, it's an issue from client side.
  - The following properties may be helpful to resolve the issue:
    - Response header - Please refer to `Response Metadata` section for more details.
    - HTTP status code
    - Error code - Server's error code, e.g. `-1102`
    - Error message - Server's error message, e.g. `Unknown order sent.`
    - Request config - Configuration send to the server, which can include URL, request method and headers.

  ```
  // client initialization is skipped
  client.exchangeInfo({ symbol: 'invalidSymbol' })
    .then(response => client.logger.log(response.data))
    .catch(err => {
      client.logger.error(err.response.headers) // full response header
      client.logger.error(err.response.status) // HTTP status code 400
      client.logger.error(err.response.data) // includes both error code and message
      client.logger.error(err.response.config) // includes request's config
    })

  ```

- `Server error`
  - This is thrown when server returns `5XX`, it's an issue from server side.

## Websocket

The WebSocket URLs for the available futures environments are as follows:

- Testnet CM: wss://dstream.binancefuture.com
- Testnet UM: wss://stream.binancefuture.com
- Main CM: wss://dstream.binance.com
- Main UM: wss://fstream.binance.com

### Websocket Streams

You can connect to the WebSocket stream using the UMStream Module (for USD-M Futures). Here is an example:

```javascript
const { UMStream } = require("@binance/futures-connector");
const logger = new Console({ stdout: process.stdout, stderr: process.stderr });

// Define callbacks for different events
const callbacks = {
  open: () => logger.debug("Connected with Websocket server"),
  close: () => logger.debug("Disconnected with Websocket server"),
  message: (data) => logger.info(data),
};

// Create a new WebSocket client with the wsURL (Websocket URL) defined
const umWebsocketStreamClient = new UMStream({
  logger,
  callbacks,
  wsURL: "wss://fstream.binance.com",
});

// Subscribe to the allMarketMiniTickersStream stream
umWebsocketStreamClient.allMarketMiniTickersStream("bnbusdt_perp");

// Close the WebSocket stream after 6 seconds
setTimeout(() => umWebsocketStreamClient.disconnect(), 6000);
```

### Unsubscribe Websocket Stream

You can unsubscribe from a WebSocket stream as follows:

```javascript
umWebsocketStreamClient.unsubscribe("bnbusdt_perp@kline_1m");
```

## License

MIT
