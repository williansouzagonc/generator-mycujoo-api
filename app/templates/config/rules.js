'use strict'

module.exports = {
    env: {
        doc: 'The application environment.',
        format: [
            'production',
            'staging',
            'development',
            'test',
        ],
        default: 'development',
        env: 'NODE_ENV',
    },

    port: {
        doc: 'The application port.',
        format: 'port',
        default: 4100,
        env: 'PORT',
    },

    app_name: {
        doc: 'The name of the application',
        format: '*',
        default: null,
    },
}
