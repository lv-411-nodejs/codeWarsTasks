const errorHandler = require('../helpers/errorHandlers');
const Validator = require('../helpers/validator');
const validator = require('../helpers/validator');

module.exports = {
  showAllTasks(req, res) {
    res.status(200)
      .json({
        'stas': ['Sum of a sequence'],
        'maks': ['Slamming Lockers'],
        'oleh': ['Where is Vasya?'],
        'oleksiy': ['Looking for a benefactor'],
        'ostap': ['Easy Line'],
        'nadiia': ['Recursive Replication'],
        'bohdan': ['Sum of the first nth term of Series'],
        'ruslan': ['Triple Shiftian Numbers'],
      });
  },

  seriesSumGetController(req, res) {
    res.status(200)
      .json({
        body: 'Sum of the first nth term of Series (JavaScript)',
        link: 'https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series',
      });
  },

  seriesSumPostController(req, res) {
    const {
      len
    } = req.body;

    const seriesSum = (n) => {
      if (n == 0 || !n) return '0.00';

      let sum = 1;
      let next = 4;

      for (let i = 1; i < n; i++) {
        sum += 1 / next;
        next += 3;
      }

      return sum.toFixed(2).toString();
    };

    try {
      let v = new validator([len]);
      v.checkArgumentsTypes(['number']);

      res.status(200).json({
        result: seriesSum(len),
      });
    }
    catch (e) {
      res.status(400).json({
        error: e.message
      });
    }
  },

  newAvgGetController(req, res) {
    res.status(200)
      .json({
        body: 'Looking for a benefactor',
      });
  },

  newAvgPostController(req, res) {
    const { arr, newavg } = req.body;

    const newAvg = (arr, newavg) => {
      const totalSum = arr.reduce((total, current) => total + current, 0);
      const result = newavg * (arr.length + 1) - totalSum;

      if (result < 0) throw new RangeError('Error');
      return Math.ceil(result);
    };

    res.status(200)
      .json({
        result: newAvg(arr, newavg),
      });
  },

  tripleShiftianGetController(req, res) {
    res.status(200)
      .json({
        body: 'The Triple Shiftian task',
        link: 'https://www.codewars.com/kata/triple-shiftian-numbers',
      });
  },

  tripleShiftianPostController(req, res) {
    try {
      const { base, n } = req.body;
      const errorHandler = new Validator([base, n]);
      errorHandler.checkArgumentsTypes(['array', 'number']);
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
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  whereIsGetController(req, res) {
    res.status(200).json({
      info: 'Where is Vasya?',
      link: 'https://www.codewars.com/kata/where-is-vasya',
      in: [{
        "p": 3,
        "bef": 1,
        "aft": 1
      }, {
        "p": 5,
        "bef": 2,
        "aft": 3
      }],
      out: [2, 3]
    });
  },

  whereIsHePostController(req, res) {
    try {
      const {
        p,
        bef,
        aft
      } = req.body;
      let posNumb = 0;
      for (let i = 1; i <= p; i++) {
        if (i - 1 <= aft && p - i >= bef) {
          posNumb++;
        }
      }
      const result = posNumb;
      res.status(200).json({
        result
      });
    } catch (e) {
      errorHandler(res, e);
    }
  },

  lockerRunGetController(req, res) {
    res.status(200)
        .json({
          body: 'Slamming Lockers',
          link: 'https://www.codewars.com/kata/slamming-lockers',
        });
  },

  lockerRunPostController(req, res) {
    const lockers = req.body;

    const lockerRun = (lockers) => {
      const open = [];
      for (let i = 1; i * i <= lockers; i++) {
        open.push(i * i);
      }
      return open;
    };
    res.status(200)
        .json({
          result: lockerRun(lockers),
        });
  },

  replicateInfo(req, res) {
    res.status(200)
      .json({
        body: 'Recursive Replication',
      });
  },

  replicateRun(req, res) {
    const {
      times,
      number
    } = req.body;
    const replicate = (times, number) => {
      return times > 0 ? [number].concat(replicate(times - 1, number)) : [];
    };
    res.status(200)
      .json({
        result: replicate(times, number)
      });
  },

  Easy_Line_Run(req, res) {
    const {
      n
    } = req.body;
    const easyLine = (n) => {
      let sum = 1;
      for (let i = 1; i <= n; i++) {
        sum = sum * (n + i) / i;
      }
      return Math.round(Math.log(sum));
    };
    res.status(200).json({
      result: easyLine(n),
    });
  },

  Easy_Line_Info(req, res) {
    res.status(200).json({
      body: 'Easy Line',
    });
  },

  sequenceSumInfo(req, res) {
    res.status(200).json({
      body: 'Sum of a sequence'
    })
  },

  sequenceSumRun(req, res) {
    const {
      begin,
      end,
      step
    } = req.body
    const sequenceSum = (begin, end, step) => {
      if (begin > end) {
        return 0
      } else if (begin === end) {
        return begin
      } else {
        return begin + sequenceSum((begin += step), end, step)
      }
    }
    res.status(200).json({
      result: sequenceSum(begin, end, step)
    })
  },

};
