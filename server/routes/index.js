const kyu8 = require('../controllers/kyu8');
const kyu7 = require('../controllers/kyu7');
const kyu6 = require('../controllers/kyu6');
const kyu5 = require('../controllers/kyu5');

const prefix = require('../helpers/prefix');

module.exports = (app) => {
  app.get('/api/tasks/8', kyu8.showAllTasks);
  app.get('/api/tasks/7', kyu7.showAllTasks);

  app.get(`${prefix.k8}/amiwilson`, kyu8.amIWilsonInfo);
  app.post(`${prefix.k8}/amiwilson`, kyu8.amIWilsonRun);

  app.get(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesInfo);
  app.post(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesRun);

  app.get(`${prefix.k7}/newavg`, kyu7.newAvgInfo);
  app.post(`${prefix.k7}/newavg`, kyu7.newAvgRun);

  app.get(`${prefix.k6}/balance`, kyu6.balanceInfo);
  app.post(`${prefix.k6}/balance`, kyu6.balanceRun);

  app.get(`${prefix.k5}/smallest`, kyu5.smallestInfo);
  app.post(`${prefix.k5}/smallest`, kyu5.smallestRun);

  app.get(`${prefix.k8}/shortlong`, kyu8.solutionInfo);
  app.post(`${prefix.k8}/shortlong`, kyu8.solutionRun);
};
