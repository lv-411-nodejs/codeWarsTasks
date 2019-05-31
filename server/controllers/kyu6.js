module.exports = {

  pileOfCubesInfo(req, res) {
    res.status(200)
        .json({
          body: 'Build a pile of Cubes (JavaScript)',
        });
  },

  pileOfCubesRun(req, res) {
    const {m} = req.body;

    const findNb = (m) => {
      let x = 0;
      while (m > 0) {
        x += 1;
        m = m - x ** 3;
      }

      return m ? -1 : x;
    };

    res.status(201)
        .json({
          result: findNb(m),
        });
  },

  balanceInfo(req, res) {
    res.status(200)
        .json({
          body: 'Easy Balance Checking',
        });
  },

  balanceRun(req, res) {
    const {book} = req.body;

    const balance = (book) => {
      const arrBook = bookToArray(book);
      const bookToString = function(array) {
        return array.map((e) => e.join(' ')).join('\r\n');
      };

      const bookToArray = function(book) {
        return book.split('\n')
            .map((e) => e.split(' '))
            .filter((e) => e.toString() !== '');
      };

      const numberFormat = function(str, cur = 2) {
        str = str.replace(/[^\d+.]/g, '');
        str = (+str).toFixed(cur);
        return str;
      };
      arrBook[0][0] = numberFormat(arrBook[0][0], 2);
      let balance = parseFloat(arrBook[0][0]);
      let sumForAvg = 0;

      for (let i = 1; i < arrBook.length; i++) {
        arrBook[i][1] = arrBook[i][1].replace(/\W/g, '');
        arrBook[i][2] = numberFormat(arrBook[i][2], 2);
        balance -= +arrBook[i][2];
        sumForAvg += +arrBook[i][2];
        arrBook[i].push('Balance ' + balance.toFixed(2));
      }

      arrBook.push(
          [`Total expense  ${(+arrBook[0][0] - balance).toFixed(2)}`],
          [`Average expense  ${(sumForAvg / (arrBook.length - 1)).toFixed(2)}`]
      );
      arrBook[0][0] = 'Original Balance: ' + arrBook[0][0];

      return bookToString(arrBook);
    };

    res.status(200)
        .json({
          result: balance(book),
        });
  },

  bouncingBallsRun(req, res) {
    const {h, bounce, window} = req.body;

    const bouncingBall = (h, bounce, window) => {
      if (h > 0 && bounce > 0 && bounce < 1) {
        let count = 0;
        while (h > window) {
          h *= bounce;
          count += 2;
        }
        return count - 1;
      }
      return -1;
    };

    res.status(200)
        .json({
          result: bouncingBall(h, bounce, window),
        });
  },

  bouncingBallsInfo(req, res) {
    res.status(200)
        .json({
          body: 'Bouncing Balls',
        });
  },
};
