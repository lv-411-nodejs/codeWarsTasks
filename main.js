require("amd-loader");
// var msg = require('./tasks/template');
// msg.print("run!");


var kyu8_1=require('./tasks/8_kyu');
console.log(kyu8_1.Kata(6.3,2,5));

var kyu7=require('./tasks/7_kyu');
console.log(kyu7.whereIsHe(5, 2, 3));

var kyu6=require('./tasks/6_kyu');
console.log(kyu6.mean("London"));
console.log(kyu6.variance("Beijing"));

var kyu5=require('./tasks/5_kyu');
console.log(kyu5.gap(2, 5, 7));