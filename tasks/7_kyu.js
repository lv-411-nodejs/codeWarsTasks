define(function () {
    return {
        newAvg: function (arr, newavg) {
            let totalSum = arr.reduce((total, current) => total + current, 0);
            let result = newavg * (arr.length + 1) - totalSum;

            if (result < 0) throw new RangeError('Error')
            return Math.ceil(result)
        }
    };
});
