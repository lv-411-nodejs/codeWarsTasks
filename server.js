const app = require('./server/app');
const port = 8082;
const checkUrl = (url) => /^\/api$/.test(url);
app.use('*', (req, res, next) => {
  checkUrl(req.baseURL) && next() ||
    res.status(400).json({msg: 'sorry bad day'});
});
app.listen(port, () => {
  console.log(`running at localhost:${port}`);
});
