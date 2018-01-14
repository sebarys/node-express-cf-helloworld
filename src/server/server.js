const express = require('express'),
    route = require('./routes/route');
const app = express();

app.use(function (req, res, next) {
    res.charset = 'utf-8';
    next();
});

app.use('/', route);

app.listen(8080, () => console.log('Example app listening on port 8080!'));