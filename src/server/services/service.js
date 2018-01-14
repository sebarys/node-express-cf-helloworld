const config = require('config'),
    request = require('request-promise-native');

const service = {};

const SERVICE_URL = config.get('serviceUrl');

service.getContent = function () {
    console.log(`Calling: ${SERVICE_URL}`)
    return request.get({
        url: SERVICE_URL,
        headers: {
            'User-Agent': 'Request-Promise'
        }
    })
    .then((body) => {
        console.log(`Successfully received: ${body}`);
        return body;
    });
}

module.exports = service;