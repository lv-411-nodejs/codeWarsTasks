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

    res.status(200)
        .json({
          result: smallest(n),
        });
  },
};
