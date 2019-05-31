module.exports = {

  seriesSumInfo(req, res) {
    res.status(200)
        .json({
          body: 'Sum of the first nth term of Series (JavaScript)',
        });
  },

  seriesSumRun(req, res) {
    const {len} = req.body;

    const seriesSum = (n) => {
      if (n == 0 || !n) return '0.00';

      let sum = 1; let next = 4;

      for (let i = 1; i < n; i++) {
        sum += 1 / next;
        next += 3;
      }

      return sum.toFixed(2).toString();
    };

    res.status(201)
        .json({
          result: seriesSum(len),
        });
  },

  newAvgInfo(req, res) {
    res.status(200)
        .json({
          body: 'Looking for a benefactor',
        });
  },

  newAvgRun(req, res) {
    const {arr, newavg} = req.body;

    const newAvg = (arr, newavg) => {
      const totalSum = arr.reduce((total, current) => total + current, 0);
      const result = newavg * (arr.length + 1) - totalSum;

      if (result < 0) throw new RangeError('Error');
      return Math.ceil(result);
    };

    res.status(201)
        .json({
          result: newAvg(arr, newavg),
        });
  },

  tripleShiftianInfo(req, res) {
    res.status(200)
        .json({
          info: 'Looking for a benefactor',
        });
  },

  tripleShiftianRun(req, res) {
    const {base, n} = req.body;
    const tripleShiftian = (base, n) => {
      if (n < 3) return base[n];
      else {
        for (let i = 3; i <= n; i++) {
          base.push(4 * base[i - 1] - 5 * base[i - 2] + 3 * base[i - 3]);
        }
        return base[n];
      }
    };

    res.status(200)
        .json({
          result: tripleShiftian(base, n),
        });
  },
};
