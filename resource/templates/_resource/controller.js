'use strict'

const index = ({ response }) => {
    response.status = 200
    response.body = 'My app is working !'
}

module.exports = {
    index,
}
