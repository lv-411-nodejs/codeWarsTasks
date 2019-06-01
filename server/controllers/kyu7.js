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

  replicateInfo(req, res) {
    res.status(200)
      .json({
        body: 'Recursive Replication'
    });
  },

  replicateRun(req, res) {
    const {times, number} = req.body;
    const replicate = (times, number) => {
      return times > 0 ? [number].concat(replicate(times - 1, number)) : [];
    };
    res.status(200)
      .json({
        result: replicate(times, number)
    });
  }
};
