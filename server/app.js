const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '2mb'}));

require('./routes')(app);

module.exports = app;
