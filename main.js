require("amd-loader");

const kyu_8 = require('./tasks/8_kyu');
console.log(kyu_8.animals(12,24));
console.log(kyu_8.solution('get', 'beer'));

const kyu_7 = require('./tasks/7_kyu');
console.log(kyu_7.tripleShiftian([1,1,1],24));

const kyu_6 = require('./tasks/6_kyu');
console.log(kyu_6.bouncingBall(12, 0.66, 2));

const kyu_5 = require('./tasks/5_kyu');
console.log(kyu_5.productFibonacci(65));
