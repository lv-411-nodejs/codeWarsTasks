const express = require('express');
const app = express();

const bodyParser  = require('body-parser');

const port = 3000;

const users = ['fedyna', 'dutkevych', 'ners', 'mushora', 'chorna', 'domianych', 'voloskiy', 'pidluzhnyy']

// middlewares
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/kyu/:name/:level', (req, res) => {

  const {name, level} = req.params;
  const {func, args} = req.body;

  let response = 'Sorry';

  if(users.includes(name) && (level > 4 && level < 9))  {
    let kyu = require(`./public/tasks/${name}/level_${level}.js`);
    response = kyu[func].apply({}, args)
  }

  res.json(response);
});

app.get('/kyu/:level/:name', function (req, res) {
  const {level, name} = req.params;

  if(level > 4 && level < 9){
    res.send(data[level][name].info);
  }
  else
    res.send(`sorry level ${level} not found`);
});

app.listen(port, function () {
  console.log(`server started on port ${port}`);
});
