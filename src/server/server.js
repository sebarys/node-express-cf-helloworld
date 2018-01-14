const express = require('express'),
    route = require('./routes/route');
const app = express();

app.use('/', route);

app.listen(8080, () => console.log('Example app listening on port 8080!'));