require("amd-loader");
// var msg = require('./tasks/template');
// msg.print("run!");

var kuy_5 = require("./tasks/5_kyu");
console.log(kuy_5.movingShift(1));
console.log(kuy_5.demovingShift(1));

var kuy_6 = require("./tasks/6_kyu");
console.log(kuy_6.interp(x => x, 0, 9.0, 4));

var kuy_7 = require("./tasks/7_kyu");
console.log(kuy_7.easyLine(7));

var kuy_8 = require("./tasks/8_kyu");
console.log(kuy_8.dutyFree(12, 50, 1000));

console.log(kuy_8.validateUsr('asdad'));