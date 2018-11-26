'use strict'

const Router = require('koa-better-router')
const controller = require('./{{RESOURCE_NAME}}.controller')

const router = Router({ prefix: '/{{RESOURCE_NAME}}' }).loadMethods()

router.get('/', controller.index)

module.exports = router