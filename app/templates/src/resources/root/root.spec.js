'use strict'

const app = require('../../server')
const request = require('supertest').agent(app.listen())

describe('GET /', () => {
    it('should respond with 200', (done) => {
        request
            .get('/')
            .expect(200, done)
    })
})
