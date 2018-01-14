const express = require('express'),
    router = express.Router(),
    service = require('../services/service');

router.get('/', function (req, res) {
    res.send('Hello World!');
})

router.get('/resources', function (req, res) {
    service.getContent()
        .then(result => {
            console.log(`Received result: ${result}`)
            res.send(result);
        })
        .catch(error => {
            console.log(error.message);
            handleError(error, res);
        });
});

function handleError(error, res) {
    if(error.code === 'ERR_BAD_REQUEST') {
        res.status(400).send({
            code: 400,
            message: 'Bad request. Please check the parameters.'
        });
    } if(error.code === 'ERR_NOT_FOUND') {
        res.status(404).send({
            code: 404,
            message: error.message
        });
    } else {
        res.status(500).send({
            code: 500,
            message: 'Internal error occurred. Please contact administrator'
        });
    }
}

module.exports = router;