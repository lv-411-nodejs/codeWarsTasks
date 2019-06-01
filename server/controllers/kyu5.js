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

          if (Number(test.slice(0, j).concat(row[i], test.slice(j)).join('')) < min[0]) {
            min = [Number(test.slice(0, j).concat(row[i], test.slice(j)).join('')), i, j];
          }
        }
      }

      return min;
    };

    res.status(201)
        .json({
          result: smallest(n),
        });
  },

  perimeterGetController(req, res) {
    res.status(200)
        .json({
          body: 'Perimeter of squares in a rectangle',
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
};
