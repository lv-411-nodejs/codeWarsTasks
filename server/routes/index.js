const kyu8 = require('../controllers/kyu8');
const kyu7 = require('../controllers/kyu7');
const kyu6 = require('../controllers/kyu6');
const kyu5 = require('../controllers/kyu5');

const prefix = require('../helpers/prefix');
const validator = require('../helpers/validator');

module.exports = (app) => {
  app.get('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksInfo);
  app.post('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksRun);

  app.get('/api/task/kyu8/litres', kyu8.Keep_HydratedInfo);
  app.post('/api/task/kyu8/litres', kyu8.Keep_HydratedRun);

  app.get(`${prefix.k7}/sequenceSum`, kyu7.sequenceSumInfo);
  app.post(`${prefix.k7}/sequenceSum`, kyu7.sequenceSumRun);

  app.get(`${prefix.k6}/approximationPoint`, kyu6.approximationPointInfo);
  app.post(`${prefix.k6}/approximationPoint`, kyu6.approximationPointRun);

  app.get(`${prefix.k5}/artificialRainRun`, kyu5.artificialRainInfo);
  app.post(`${prefix.k5}/artificialRainRun`, kyu5.artificialRainRun);

  app.get('/api/tasks', kyu8.showAllTasks);

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

  app.get(`${prefix.k8}/headlegs`, kyu8.animalGetController);
  app.post(`${prefix.k8}/headlegs`, kyu8.animalPostController);

  app.get(`${prefix.k8}/amiwilson`, kyu8.amIWilsonInfo);
  app.post(`${prefix.k8}/amiwilson`, kyu8.amIWilsonRun);

  app.get(`${prefix.k8}/getVolumeOfCuboid`, kyu8.getVolumeOfCuboidGetController);
  app.post(`${prefix.k8}/getVolumeOfCuboid`, kyu8.getVolumeOfCuboidPostController);

  app.get(`${prefix.k8}/converter`, kyu8.converterGetController);
  app.post(`${prefix.k8}/converter`, kyu8.converterPostController);

  app.get(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesInfo);
  app.post(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesRun);

  app.get(`${prefix.k7}/newavg`, kyu7.newAvgInfo);
  app.post(`${prefix.k7}/newavg`, kyu7.newAvgRun);

  app.get(`${prefix.k7}/whereIsHe`, kyu7.whereIsGetController);
  app.post(`${prefix.k7}/whereIsHe`, kyu7.whereIsHePostController);

  app.get(`${prefix.k6}/balance`, kyu6.balanceInfo);
  app.post(`${prefix.k6}/balance`, kyu6.balanceRun);

  app.get(`${prefix.k6}/rainfall`, kyu6.rainfallGetController);
  app.post(`${prefix.k6}/rainfall`, kyu6.rainfallPostController);

  app.get(`${prefix.k5}/smallest`, kyu5.smallestInfo);
  app.post(`${prefix.k5}/smallest`, kyu5.smallestRun);

  app.get(`${prefix.k8}/shortlong`, kyu8.solutionGetController);
  app.post(`${prefix.k8}/shortlong`, kyu8.solutionPostController);

  app.get(`${prefix.k7}/shiftian`, kyu7.tripleShiftianGetController);
  app.post(`${prefix.k7}/shiftian`, kyu7.tripleShiftianPostController);

  app.get(`${prefix.k6}/bouncing`, kyu6.bouncingBallGetController);
  app.post(`${prefix.k6}/bouncing`, kyu6.bouncingBallPostController);

  app.get(`${prefix.k5}/fibonacci`, kyu5.productFibonacciGetController);
  app.post(`${prefix.k5}/fibonacci`, kyu5.productFibonacciPostController);

  app.get(`${prefix.k5}/gap`, kyu5.gapGetController);
  app.post(`${prefix.k5}/gap`, kyu5.gapPostController);

  app.get(`${prefix.k8}/squareOrSquareRoot`, kyu8.squareOrSquareRootInfo);
  app.post(`${prefix.k8}/squareOrSquareRoot`, kyu8.squareOrSquareRootRun);

  app.get(`${prefix.k8}/fixTheMeerkat`, kyu8.fixTheMeerkatInfo);
  app.post(`${prefix.k8}/fixTheMeerkat`, kyu8.fixTheMeerkatRun);

  app.get(`${prefix.k7}/replicate`, kyu7.replicateInfo);
  app.post(`${prefix.k7}/replicate`, kyu7.replicateRun);

  app.get(`${prefix.k6}/nbaCup`, kyu6.nbaCupInfo);
  app.post(`${prefix.k6}/nbaCup`, kyu6.nbaCupRun);

  app.get(`${prefix.k5}/zeros`, kyu5.zerosInfo);
  app.post(`${prefix.k5}/zeros`, kyu5.zerosRun);

  app.get(`${prefix.k8}/stringToNumberGetController`, kyu8.stringToNumberGetController);
  app.post(`${prefix.k8}/stringToNumberPostController`, kyu8.stringToNumberPostController);

  app.get(`${prefix.k8}/countPositivesSumNegativesGetController`, kyu8.countPositivesSumNegativesGetController);
  app.post(`${prefix.k8}/countPositivesSumNegativesPostController`, kyu8.countPositivesSumNegativesPostController);

  app.get(`${prefix.k7}/lockerRunGetController`, kyu7.lockerRunGetController);
  app.post(`${prefix.k7}/lockerRunPostController`, kyu7.lockerRunPostController);

  app.get(`${prefix.k6}/stockListGetController`, kyu6.stockListGetController);
  app.post(`${prefix.k6}/stockListPostController`, kyu6.stockListPostController);

  app.get(`${prefix.k5}/perimeterGetController`, kyu5.perimeterGetController);
  app.post(`${prefix.k5}/perimeterPostController`, kyu5.perimeterPostController);

  app.get(`${prefix.k8}/dutyfree`, kyu8.Holiday_VIII_Duty_FreeInfo);
  app.post(`${prefix.k8}/dutyfree`, kyu8.Holiday_VIII_Duty_FreeRun);

  app.get(`${prefix.k8}/validateUsr`, kyu8.Simple_validation_usernameInfo);
  app.post(`${prefix.k8}/validateUsr`, kyu8.Simple_validation_usernameRun);

  app.get(`${prefix.k5}/movingShift`, kyu5.FirstVariationInfo);
  app.post(`${prefix.k5}/movingShift`, kyu5.FirstVariationRun);

  app.get(`${prefix.k7}/easyLine`, kyu7.Easy_Line_Info);
  app.post(`${prefix.k7}/easyLine`, kyu7.Easy_Line_Run);

  app.get(`${prefix.k6}/interp`, kyu6.FloatingPointInfo);
  app.post(`${prefix.k6}/interp`, kyu6.FloatingPointRun);
};
