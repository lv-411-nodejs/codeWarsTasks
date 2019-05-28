require("amd-loader");
//var msg = require('./tasks/template');
//msg.print("run!");

var kyu8=require('./tasks/8_kyu');
console.log(kyu8.fixTheMeerkat(['tail', 'body', 'head']));
console.log(kyu8.squareOrSquareRoot([4,3,9,7,2,1]));

var kyu7=require('./tasks/7_kyu');
console.log(kyu7.replicate(3,5));

//var kyu6=require('./tasks/6_kyu');

var kyu5=require('./tasks/5_kyu');
console.log(kyu5.zeros(6));