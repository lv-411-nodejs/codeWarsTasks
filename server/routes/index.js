const kyu8 = require('../controllers/kyu8');
const kyu7 = require('../controllers/kyu7');
const kyu6 = require('../controllers/kyu6');
const kyu5 = require('../controllers/kyu5');

const prefix = require('../helpers/prefix');

module.exports = (app) => {
  app.get('/api/tasks/8', kyu8.showAllTasks);
  app.get('/api/tasks/7', kyu7.showAllTasks);
  app.get('/api/tasks/6', kyu6.showAllTasks);
  app.get('/api/tasks/5', kyu5.showAllTasks);

  app.get(`${prefix.k8}/startingMark`, kyu8.startingMarkGetController);
  app.post(`${prefix.k8}/startingMark`, kyu8.startingMarkPostController);

  app.get(`${prefix.k8}/litres`, kyu8.litresGetController);
  app.post(`${prefix.k8}/kyu8/litres`, kyu8.litresPostController);

  app.get(`${prefix.k7}/sequenceSum`, kyu7.sequenceSumGetController);
  app.post(`${prefix.k7}/sequenceSum`, kyu7.sequenceSumPostController);

  app.get(`${prefix.k6}/approximationPoint`, kyu6.approximationPointGetController);
  app.post(`${prefix.k6}/approximationPoint`, kyu6.approximationPointPostController);

  app.get(`${prefix.k5}/artificialRain`, kyu5.artificialRainGetController);
  app.post(`${prefix.k5}/artificialRain`, kyu5.artificialRainPostController);

  app.get(`${prefix.k8}/divisibleby`, kyu8.divisibleByGetController);
  app.post(`${prefix.k8}/divisibleby`, kyu8.divisibleByPostController);

  app.get(`${prefix.k8}/circlearea`, kyu8.circleAreaGetController);
  app.post(`${prefix.k8}/circlearea`, kyu8.circleAreaPostController);

  app.get(`${prefix.k7}/seriessum`, kyu7.seriesSumGetController);
  app.post(`${prefix.k7}/seriessum`, kyu7.seriesSumPostController);

  app.get(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesGetController);
  app.post(`${prefix.k6}/pileofcubes`, kyu6.pileOfCubesPostController);

  app.get(`${prefix.k5}/weight`, kyu5.weightForWeightGetController);
  app.post(`${prefix.k5}/weight`, kyu5.weightForWeightPostController);

  app.get(`${prefix.k8}/headlegs`, kyu8.animalGetController);
  app.post(`${prefix.k8}/headlegs`, kyu8.animalPostController);

  app.get(`${prefix.k8}/amiwilson`, kyu8.amIWilsonGetController);
  app.post(`${prefix.k8}/amiwilson`, kyu8.amIWilsonPostController);

  app.get(`${prefix.k8}/getVolumeOfCuboid`, kyu8.getVolumeOfCuboidGetController);
  app.post(`${prefix.k8}/getVolumeOfCuboid`, kyu8.getVolumeOfCuboidPostController);

  app.get(`${prefix.k8}/converter`, kyu8.converterGetController);
  app.post(`${prefix.k8}/converter`, kyu8.converterPostController);

  app.get(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesGetController);
  app.post(`${prefix.k8}/twodecimalplaces`, kyu8.twoDecimalPlacesPostController);

  app.get(`${prefix.k7}/newavg`, kyu7.newAvgGetController);
  app.post(`${prefix.k7}/newavg`, kyu7.newAvgPostController);

  app.get(`${prefix.k7}/whereIsHe`, kyu7.whereIsGetController);
  app.post(`${prefix.k7}/whereIsHe`, kyu7.whereIsHePostController);

  app.get(`${prefix.k6}/balance`, kyu6.balanceGetController);
  app.post(`${prefix.k6}/balance`, kyu6.balancePostController);

  app.get(`${prefix.k6}/rainfall`, kyu6.rainfallGetController);
  app.post(`${prefix.k6}/rainfall`, kyu6.rainfallPostController);

  app.get(`${prefix.k5}/smallest`, kyu5.smallestGetController);
  app.post(`${prefix.k5}/smallest`, kyu5.smallestPostController);

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

  app.get(`${prefix.k8}/squareOrSquareRoot`, kyu8.squareOrSquareRootGetController);
  app.post(`${prefix.k8}/squareOrSquareRoot`, kyu8.squareOrSquareRootPostController);

  app.get(`${prefix.k8}/fixTheMeerkat`, kyu8.fixTheMeerkatGetController);
  app.post(`${prefix.k8}/fixTheMeerkat`, kyu8.fixTheMeerkatPostController);

  app.get(`${prefix.k7}/replicate`, kyu7.replicateGetController);
  app.post(`${prefix.k7}/replicate`, kyu7.replicatePostController);

  app.get(`${prefix.k6}/nbaCup`, kyu6.nbaCupGetController);
  app.post(`${prefix.k6}/nbaCup`, kyu6.nbaCupPostController);

  app.get(`${prefix.k5}/zeros`, kyu5.zerosGetController);
  app.post(`${prefix.k5}/zeros`, kyu5.zerosPostController);

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
