const errorHandler = require('../helpers/errorHandlers');
const Validator = require('../helpers/validator');
const validator = require('../helpers/validator');

module.exports = {
  showAllTasks(req, res) {
    res.status(200)
      .json({
        'stas': ['Artificial Rain'],
        'maks': ['Perimeter of squares in a rectangle'],
        'oleh': ['Gap in Primes'],
        'oleksiy': ['Find the smallest'],
        'ostap': ['First Variation on Caesar Cipher'],
        'nadiia': ['Number of trailing zeros of N!'],
        'bohdan': ['Which x for that sum?'],
        'ruslan': ['Product of consecutive Fib numbers'],
      });
  },

  whichXGetController(req, res) {
    res.status(200)
      .json({
        body: 'Which x for that sum?',
        link: '',
      });
  },

  whichXPostController(req, res) {
    const {
      m
    } = req.body;

    const solve = (m) => {
      return m;
    };

    res.status(200)
      .json({
        result: solve(m),
      });
  },

  smallestGetController(req, res) {
    res.status(200)
      .json({
        body: 'Find the smallest',
      });
  },

  smallestPostController(req, res) {
    const { n } = req.body;

    const smallest = (n) => {
      const row = String(n).split('');
      let min = [n, 0, 0];
      let test = [];

      for (let i = 0, length = row.length; i < length; i++) {
        for (let j = 0; j < length; j++) {
          test = row.slice(0, i).concat(row.slice(i + 1));
          const check = Number(test.slice(0, j).concat(row[i], test.slice(j))
            .join('')) < min[0];
          if (check) {
            min = [check, i, j];
          }
        }
      }

      return min;
    };

    try {
      const validatorArg = new validator([n]);
      validatorArg.checkArgumentsTypes(['number']);

      res.status(200)
      .json({
        result: smallest(n),
      });
    }
    catch(e) {
      res.status(400).json({
        error: e.message
      });
    }
  },

  productFibonacciPostController(req, res) {
    try {
      const { prod } = req.body;
      const errorHandler = new Validator([prod]);
      errorHandler.checkArgumentsTypes(['number']);

      const productFibonacci = (prod) => {
        let a = 0;
        let b = 1;
        let c = 1;
        while ((a * b) !== prod) {
          if (a * b > prod) return [a, b, false];
          c = a + b;
          a = b;
          b = c;
        }
        return [a, b, true];
      };

      res.status(200)
        .json({
          result: productFibonacci(prod),
        });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  productFibonacciGetController(req, res) {
    res.status(200)
      .json({
        body: 'Product of consecutive Fib numbers',
        link: 'https://www.codewars.com/kata/product-of-consecutive-fib-numbers/python',
      });
  },

  gapGetController(req, res) {
    res.status(200).json({
      info: 'Gap in Primes',
      link: 'https://www.codewars.com/kata/gap-in-primes',
      in: [{
        "g": 2,
        "m": 100,
        "n": 110
      },
      {
        "g": 4,
        "m": 100,
        "n": 110
      },
      {
        "g": 6,
        "m": 100,
        "n": 110
      },
      {
        "g": 8,
        "m": 300,
        "n": 400
      },
      {
        "g": 10,
        "m": 300,
        "n": 400
      }
      ],
      out: [
        [101, 103],
        [103, 107], null, [359, 367],
        [337, 347]
      ]
    });
  },

  gapPostController(req, res) {
    try {
      const {
        g,
        m,
        n
      } = req.body;

      function gap(g, m, n) {
        let unswer = [];
        let primeNumbers = [];
        primeNumbers.length = n + 1;
        primeNumbers.fill(0, 0, n + 1)
        for (let i = 2; i * i < n + 1; i++) {
          if (primeNumbers[i] == 0) {
            for (let k = i * i; k < n + 1; k += i) {
              primeNumbers[k] = 1
            }
          }
        }
        let interimGap = 0,
          interimNumber = m;
        while (m <= n + 1 - g) {
          if ((primeNumbers[m] == 0) && (primeNumbers[m + g] == 0)) {
            let isPrimeBetween = false;
            for (let f = m + 1; f <= (m + g - 1); f++) {
              if (primeNumbers[f] == 0) {
                isPrimeBetween = true;
              }
            }
            if (!isPrimeBetween) {
              unswer[0] = m;
              unswer[1] = m + g;
              return unswer;
              break;
            } else {
              m++
            }
          } else {
            m++;
          }
        }
        return null;
      }
      const result = gap(g, m, n);
      res.status(200).json({
        result
      });
    } catch (e) {
      errorHandler(res, e);
    }
  },

  zerosGetController(req, res) {
    res.status(200)
        .json({
          body: 'Number of trailing zeros of N!',
          link: 'https://www.codewars.com/kata/number-of-trailing-zeros-of-n',
        });
  },

  zerosPostController(req, res) {
    const {n} = req.body;
    const zeros = (n) => {
      let i = 1;
      let result = 0;
      while (n / Math.pow(5, i) > 1) {
        result += Math.floor(n / Math.pow(5, i));
        i++;
      }
      return result;
    };
    try {
      const validate = new validator([n]);
      validate.checkArgumentsTypes(['number']);

      res.status(200)
          .json({
            result: zeros(n),
          });
    } catch (error) {
      res.status(400)
          .json({
            error: error.message,
          });
    }
  },

  perimeterGetController(req, res) {
    res.status(200)
        .json({
          body: 'Perimeter of squares in a rectangle',
          link: 'https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle',
        });
  },

  perimeterPostController(req, res) {
    const n = req.body;

    const perimeter = (n) => {
      const fibonacci = (n) => {
        let init = 1;
        let res = 1;

        for (let i = 0; i <= n; i++) {
          const temp = res;
          res += init;
          init = temp;
        }
        return res - 1;
      };

      return 4 * fibonacci(n);
    };

    res.status(200)
        .json({
          result: perimeter(n),
        });
  },

  FirstVariationInfo(req, res) {
    res.status(200)
      .json({
        body: 'First Variation on Caesar Cipher',
      });
  },

  FirstVariationRun(req, res) {
    const {
      s,
      shift
    } = req.body;

    const movingShift = (s, shift) => {
      const abcLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      arr = s
        .split('')
        .map(function (v, i, a) {
          if (shift >= 26) {
            shift = shift - 26;
          }
          let key = abcLowerCase.indexOf(v.toLowerCase()) + shift;
          if (key >= 26) {
            key = key - 26;
          }
          if (abcLowerCase.indexOf(v) >= 0) {
            v = abcLowerCase[key];
          }
          if (abcUpperCase.indexOf(v) >= 0) {
            v = abcUpperCase[key];
          }
          shift = shift + 1;
          return v;
        })
        .join('');
      const splitArr = [];
      for (let i = 0; i < 5; i++) {
        splitArr.push(arr.slice(i * Math.ceil(s.length / 5), (i + 1) * Math.ceil(s.length / 5)));
      }
      return splitArr;
    };
    res.status(200)
      .json({
        result: movingShift(s, shift),
      });
  },

  artificialRainInfo(req, res) {
    res.status(200)
      .json({
        body: 'Artificial Rain'
      });
  },

  artificialRainRun(req, res) {
    const {
      garden
    } = req.body;
    const artificialRain = (garden) => {
      const answers = [];
      const checkLeft = (position) => {
        if (position > 0) {
          let sum = 0;
          for (let i = position; i >= 0; i--) {
            if (garden[i - 1] <= garden[i]) {
              sum++
            } else {
              break;
            }
          }
          return sum;
        } else {
          return 0;
        }
      }
      const checkRight = (position) => {
        if (position > 0) {
          let sum = 0;
          for (let i = position, max = garden.length; i < max; i++) {
            if (garden[i + 1] <= garden[i]) {
              sum++
            } else {
              break;
            }
          }
          return sum;
        } else {
          return 0;
        }
      }
      const checkPosition = (position) => {
        const leftSum = checkLeft(position);
        const rightSum = checkRight(position)
        answers.push(1 + leftSum + rightSum);
      }
      for (let i = 0, max = garden.length; i < max; i++) {
        checkPosition(i);
      }
      return Math.max(...answers)
    };
    res.status(200)
      .json({
        result: artificialRain(garden),
      });
  },

};
