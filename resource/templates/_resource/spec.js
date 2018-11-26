'use strict'

const app = require('../../server')
const request = require('supertest').agent(app.listen())

test('GET /{{RESOURCE_NAME}} should retrieve 200', async () => {
    const { text } = await request
        .get('/{{RESOURCE_NAME}}')
        .expect(200)

    expect(text).toBe('My app is working !')
})