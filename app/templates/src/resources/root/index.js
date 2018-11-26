'use strict'

const Router = require('koa-better-router')
const controller = require('./root.controller')

const router = Router({ prefix: '/root' }).loadMethods()

router.get('/', controller.index)

module.exports = router