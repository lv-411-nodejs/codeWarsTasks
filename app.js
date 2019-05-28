const express = require('express');
const app = express();

const port = 3000;

const data = require('./public/data.json');

app.get('/', function (req, res) {
  res.json(data);
});

app.get('/kyu/:level', function (req, res) {
    const {level} = req.params;

    if(level > 4 && level < 9)
        res.json(data[level]);
    else
        res.send(`sorry level ${level} not found`);
});

app.listen(port, function () {
  console.log(`server started on server on port ${port}`);
});

