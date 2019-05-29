define(function () {
    return {
        easyLine:function easyLine(n) {
            let sum = 1;
            for (let i = 1; i <= n; i++){
                sum = sum *  (n + i) / i;
            }
            return Math.round(Math.log(sum));
        }

    }

});

