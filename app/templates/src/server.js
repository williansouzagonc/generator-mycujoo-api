'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')
const convert = require('koa-convert')
const ping = require('koa-ping')
const router = require('./routes')
const config = require('../config')

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(convert(ping()))
app.use(router.middleware())

if (config.get('env') !== 'test') {
    // Start server
    app.listen(config.get('port'))
}

// Expose app
exports = module.exports = app
