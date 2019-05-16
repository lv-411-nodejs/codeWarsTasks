var u = "I should have known that you would have a perfect answer for me!!!";
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];

function movingShift(s, shift) {

    var abcLowerCase ='abcdefghijklmnopqrstuvwxyz'.split('');
    var abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    arr = s.split('').map(function(v,i,a){

        if (shift >= 26){ shift = shift - 26;}
        var key = abcLowerCase.indexOf(v.toLowerCase()) + shift;
        if (key >= 26){ key = key - 26;}

        if (abcLowerCase.indexOf(v) >= 0){ v = abcLowerCase[key];}
        if (abcUpperCase.indexOf(v) >= 0){ v = abcUpperCase[key];}

        shift = shift + 1;
        return v;


    }).join('');

    var splitArr = [];

    for (var i = 0 ; i < 5 ; i++){
        splitArr.push(arr.slice(i * Math.ceil(s.length / 5), (i+1) * Math.ceil(s.length / 5)));
    }
    return splitArr;
}

function demovingShift(arr, shift) {
    var abcLowerCase ='abcdefghijklmnopqrstuvwxyz'.split('');
    var abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return arr.join('').split('').map(function(v,i,a){

        if (shift >= 26){ shift = shift - 26;}

        var key = abcLowerCase.indexOf(v.toLowerCase()) - shift;
        if (key < 0){ key = key + 26;}


        if (abcLowerCase.indexOf(v) >= 0){ v = abcLowerCase[key];}
        if (abcUpperCase.indexOf(v) >= 0){ v = abcUpperCase[key];}

        shift = shift + 1;
        return v;


    }).join('');
}

demovingShift(v, 1);
movingShift(u, 1);