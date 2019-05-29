module.exports = {
    amIWilson: function (p) {
        function fact(x) {
            return x <= 1 ? 1 : x * fact(x - 1);
        }

        return (fact(p - 1) + 1) / (p * p) % 1 === 0;
    },
    twoDecimalPlaces: function (n) {
        return +n.toFixed(2)
    }
}