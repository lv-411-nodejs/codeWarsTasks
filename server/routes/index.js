const kyu8 = require('../controllers/kyu8');
const kyu7 = require('../controllers/kyu7');
const kyu6 = require('../controllers/kyu6');
const kyu5 = require('../controllers/kyu5');

const prefix = require('../helpers/prefix');

module.exports = app => {

    app.get('/api/8tasks', kyu8.showAllTasks);
    app.get('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksInfo);
    app.get('/api/task/kyu8/Keep_Hydrated!', kyu8.Keep_HydratedInfo);
    app.post('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksRun);
    // app.post('/api/task/kyu8/Keep_Hydrated!', kyu8.Keep_HydratedRun);

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

    //domianych
    app.get(`${prefix.k8}/amiwilson`, kyu8.amIWilsonInfo);
    app.post(`${prefix.k8}/amiwilson`, kyu8.amIWilsonRun);







    app.get(`${prefix.k8}/volume_of_a_cuboid`, kyu8.volume_of_a_cuboidInfo);
    app.post(`${prefix.k8}/volume_of_a_cuboid`, kyu8.volume_of_a_cuboidRun);

    app.get(`${prefix.k8}/miles_per_gallon_to_kilometers_per_liter`, kyu8.miles_per_gallon_to_kilometers_per_literInfo);
    app.post(`${prefix.k8}/miles_per_gallon_to_kilometers_per_liter`, kyu8.miles_per_gallon_to_kilometers_per_literRun);

    // app.get(`${prefix.k7}/seriessum`, kyu7.seriesSumInfo);
    // app.post(`${prefix.k7}/seriessum`, kyu7.seriesSumRun);

    // app.get(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesInfo);
    // app.post(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesRun);

    // app.get(`${prefix.k5}/circlearea`, kyu5.whichXInfo);
    // app.post(`${prefix.k5}/circlearea`, kyu5.whichXRun);



    app.get(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesInfo);
    app.post(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesRun);

    app.get(`${prefix.k7}/newavg`, kyu7.newAvgInfo);
    app.post(`${prefix.k7}/newavg`, kyu7.newAvgRun);

    app.get(`${prefix.k6}/balance`, kyu6.balanceInfo);
    app.post(`${prefix.k6}/balance`, kyu6.balanceRun);

    app.get(`${prefix.k5}/smallest`, kyu5.smallestInfo);
    app.post(`${prefix.k5}/smallest`, kyu5.smallestRun);

}
