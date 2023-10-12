'use strict'

const packageJson = require('../../package.json')

const appName = packageJson.name
const appVersion = packageJson.version

module.exports = {
  appName,
  appVersion
}
