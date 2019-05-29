const kyu8 = require('../controllers/kyu8');
const kyu7 = require('../controllers/kyu7');
const kyu6 = require('../controllers/kyu6');
const kyu5 = require('../controllers/kyu5');

const prefix = require('../helpers/prefix');

module.exports = app => {
    // to get list of all katas
    app.get('/api/tasks', kyu8.showAllTasks);

    //pidluzhnyy
    app.get(`${prefix.k8}/divisibleby`, kyu8.divisibleByInfo);
    app.post(`${prefix.k8}/divisibleby`, kyu8.divisibleByRun);

    app.get(`${prefix.k8}/circlearea`, kyu8.circleAreaInfo);
    app.post(`${prefix.k8}/circlearea`, kyu8.circleAreaRun);

    app.get(`${prefix.k7}/seriessum`, kyu7.seriesSumInfo);
    app.post(`${prefix.k7}/seriessum`, kyu7.seriesSumRun);

    app.get(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesInfo);
    app.post(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesRun);

    app.get(`${prefix.k5}/circlearea`, kyu5.whichXInfo);
    app.post(`${prefix.k5}/circlearea`, kyu5.whichXRun);

}
