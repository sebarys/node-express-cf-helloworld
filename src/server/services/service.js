const config = require('config'),
    request = require('request-promise-native');

const service = {};

const SERVICE_URL = config.get('serviceUrl');

service.getContent = function () {
    return Promise.resolve({
        status: "OK",
        messsage: "content",
        serviceUrl: SERVICE_URL
    });
}

module.exports = service;