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

  whereIsGetController(req, res) {
    res.status(200).json({
        info: 'Where is Vasya?',
        link: 'https://www.codewars.com/kata/where-is-vasya',
        in: [{"p": 3, "bef": 1, "aft": 1}, {"p": 5, "bef": 2, "aft": 3}],
        out: [2,3]
    });
  },
  whereIsHePostController(req, res) {
    try {
      const {p,bef,aft} = req.body;
      let posNumb=0;
      for (let i=1; i<=p; i++){
        if (i-1<=aft && p-i>=bef) {
          posNumb++;
        }
      }
      const result = posNumb;
      res.status(200).json({
          result
      });
    } catch (e) {
      errorHandler(res, e);
    }},


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
