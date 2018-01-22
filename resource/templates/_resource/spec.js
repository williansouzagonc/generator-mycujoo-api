'use strict'

const app = require('../../server')
const request = require('supertest').agent(app.listen())

describe('GET /{{RESOURCE_NAME}}', () => {
    it('should respond with 200', (done) => {
        request
            .get('/{{RESOURCE_NAME}}')
            .expect(200, done)
    })
})
