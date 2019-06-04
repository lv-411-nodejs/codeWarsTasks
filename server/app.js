const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '2mb'}));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send('Not valid json');
    }

    next();
});

require('./routes')(app);

module.exports = app;
