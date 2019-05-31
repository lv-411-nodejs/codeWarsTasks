module.exports = {

  whichXInfo(req, res) {
    res.status(200)
        .json({
          body: 'Which x for that sum?',
        });
  },

  whichXRun(req, res) {
    const {m} = req.body;

    const solve = (m) => {
      return m;
    };

    res.status(201)
        .json({
          result: solve(m),
        });
  },

  smallestInfo(req, res) {
    res.status(200)
        .json({
          body: 'Find the smallest',
        });
  },

  smallestRun(req, res) {
    const {n} = req.body;

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

    res.status(200)
        .json({
          result: smallest(n),
        });
  },

  productFibonacciRun(req, res) {
    const {prod} = req.body;

    const productFibonacci = (prod) => {
      let a = 0; let b = 1; let c = 1;
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
  },
  productFibonacciInfo(req, res) {
    res.status(200)
        .json({
          body: 'Product of consecutive Fib numbers',
        });
  },
};
