'use strict'

const glob = require('glob')
const Router = require('koa-better-router')
// const logger = require('./src/core/logger')
const api = Router().loadMethods()
const config = require('../config')

// Using sync here to prevent races during tests
const files = glob.sync('./resources/**/index.js', { cwd: __dirname })

files.forEach((path) => {
    api.addRoutes(require(path).getRoutes())
})

if (config.get('env') !== 'test') {
    // Print routing table
    // api.getRoutes().forEach(route => logger.debug(route.method, route.path)) // eslint-disable-line no-console
}

module.exports = api
