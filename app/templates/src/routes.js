'use strict'

const glob = require('glob')
const Router = require('koa-better-router')
const api = Router().loadMethods()

// Using sync here to prevent races during tests
const files = glob.sync('./resources/**/index.js', { cwd: __dirname })

files.forEach((path) => {
    api.addRoutes(require(path).getRoutes())
})

module.exports = api
