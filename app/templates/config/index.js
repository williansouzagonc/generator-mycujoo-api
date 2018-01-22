'use strict'

const convict = require('convict')

const rules = require('./rules')

const config = convict(rules)

config.load(require(`./${config.get('env')}`))
config.validate({ strict: true })

config.set('app_name', 'mycujoo-api')

module.exports = config
