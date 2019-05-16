require("amd-loader");

let fifth = require('./tasks/5_kyu');
console.log(fifth.perimeter(10));

let sixth = require('./tasks/6_kyu');
console.log(sixth.stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));

let seventh = require('./tasks/7_kyu');
console.log(seventh.lockerRun(9));

let eighth = require('./tasks/8_kyu');
console.log(eighth.stringToNumber("123"));
console.log(eighth.countPositivesSumNegatives([-1, -2, -3, 1, 2, 3]));

