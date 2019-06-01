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

    res.status(201)
        .json({
          result: balance(book),
        });
  },
  
  nbaCupInfo(req, res) {
      res.status(200)
          .json({body: "Ranking NBA teams"});
  },

  nbaCupRun(req, res) {
    const {report, teamName} = req.body;

    const nbaCup = (report, teamName) => {
        var w = 0;
        var d = 0;
        var l = 0;
        var score = 0;
        var conceded = 0;
        let reg = new RegExp('\\b' + teamName + '\\b', 'ig');
        let games = report.split(',').filter((item) => {
            return item.match(reg);
        }).map((item) => {
            return item.trim().split(/\s*(\d+\.?\d*\b)\s*/).slice(0, -1);
        });
        if (games.length < 1) {
            return `${teamName}:This team didn't play!`
        }
        let sortgames = games.map((arr) => {
            return arr.indexOf(teamName) == 0 ? arr : arr = [arr[2], arr[3], arr[0], arr[1]];
        });
        sortgames.forEach((game) => {
            +game[1] > +game[3] ? w += 1 : (+game[1] < +game[3] ? l += 1 : d += 1)
            score += +game[1];
            conceded += +game[3];
        });
        return `${teamName}:W=${w};D=${d};L=${l};Scored=${score};Conceded=${conceded};Points=${w*3+d}`;
    };

    res.status(200)
      .json({
          result: nbaCup(report, teamName)
    });
  }
};
