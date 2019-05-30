require("amd-loader");

const kyu_8 = require('./tasks/8_kyu');
console.log(kyu_8.amIWilson(5));
console.log(kyu_8.twoDecimalPlaces(4.659725356));

const kyu_7 = require('./tasks/7_kyu');
console.log(kyu_7.newAvg([14, 30, 5, 7, 9, 11, 16], 90));

const kyu_6 = require('./tasks/6_kyu');
console.log(kyu_6.balance(`1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`));

const kyu_5 = require('./tasks/5_kyu');
console.log(kyu_5.smallest(25825));
