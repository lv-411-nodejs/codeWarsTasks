


var abcLowerCase ='abcdefghijklmnopqrstuvwxyz'.split('');
var abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

define(function () {
    return {
        movingShift: function (shift) {
            let s = "I should have known that you would have a perfect answer for me!!!";

        let abcLowerCase ='abcdefghijklmnopqrstuvwxyz'.split('');
            let abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        let arr = s.split('').map(function(v,i,a){

            if (shift >= 26){ shift = shift - 26;}
            let key = abcLowerCase.indexOf(v.toLowerCase()) + shift;
            if (key >= 26){ key = key - 26;}

            if (abcLowerCase.indexOf(v) >= 0){ v = abcLowerCase[key];}
            if (abcUpperCase.indexOf(v) >= 0){ v = abcUpperCase[key];}

            shift = shift + 1;
            return v;


        }).join('');

            let splitArr = [];

        for (let i = 0 ; i < 5 ; i++){
            splitArr.push(arr.slice(i * Math.ceil(s.length / 5), (i+1) * Math.ceil(s.length / 5)));
        }
        return splitArr;
    },

        demovingShift: function (shift) {
            let arr = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
        return arr.join('').split('').map(function(v,i,a){

            if (shift >= 26){ shift = shift - 26;}

            let key = abcLowerCase.indexOf(v.toLowerCase()) - shift;
            if (key < 0){ key = key + 26;}


            if (abcLowerCase.indexOf(v) >= 0){ v = abcLowerCase[key];}
            if (abcUpperCase.indexOf(v) >= 0){ v = abcUpperCase[key];}

            shift = shift + 1;
            return v;


        }).join('');
    }
    }
});



