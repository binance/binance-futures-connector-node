# Change log

## v0.1.6 - 2024-12-04
### Added
#### UM Futures
- `GET /fapi/v1/accountConfig`
- `GET /fapi/v1/symbolConfig`
- `GET /fapi/v3/account`
- `GET /fapi/v3/balance`
- `GET /fapi/v3/positionRisk`
- `GET /fapi/v1/convert/exchangeInfo`
- `POST /fapi/v1/convert/getQuote`
- `POST /fapi/v1/convert/acceptQuote`
- `GET /fapi/v1/convert/orderStatus`
- `GET /fapi/v1/income/asyn/id`
- `GET /fapi/v1/order/asyn`
- `GET /fapi/v1/order/asyn/id`
- `GET /fapi/v1/trade/asyn`
- `GET /fapi/v1/trade/asyn/id`

#### CM Futures
- `GET /dapi/v1/income/asyn/id`
- `GET /dapi/v1/order/asyn`
- `GET /dapi/v1/order/asyn/id`
- `GET /dapi/v1/trade/asyn`
- `GET /dapi/v1/trade/asyn/id`

### Changed
- Updated dependencies
- Added a type validation for `listenKey` parameter
- Updated Websocket Stream access
- Updated the object assignment for request options

### Removed
- `GET /fapi/v2/balance`
- `GET /fapi/v2/account`
- `GET /fapi/v2/positionRisk`

## v0.1.5 - 2024-10-03
### Changed
- Updated dependencies 
- Updated documentation links

## v0.1.4 - 2024-08-19
### Changed
- Updated dependencies
- Fixed `changeMarginType` example function name issue

## v0.1.3 - 2024-07-01
### Added
#### UM Futures
- `GET /fapi/v1/rateLimit/order`
- `POST /fapi/v1/feeBurn`
- `GET /fapi/v1/feeBurn`
- `GET /fapi/v2/ticker/price`
- `GET /futures/data/delivery-price`

### Changed
- Updated dependencies.

## v0.1.2 - 2024-04-08
### Changed
- Updated dependencies.
- Resolved issue #3

## v0.1.1 - 2023-10-20
- Updated dependencies.

## v0.1.0 - 2023-10-13
- First release.
