const errorHandler = require('../helpers/errorHandlers');
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

  rainfallGetController(req, res) {    
    res.status(200).json({
        info: 'Rainfall',
        link: 'https://www.codewars.com/kata/rainfall',
        in: [{"town":"London"},{"town":"Beijing"}],
        out: [[{"mean":51.19999999999999},{"variance": 52.416666666666664}],
              [{"mean": 57.42833333333374},{"variance": 4808.37138888889}]]
    });
  },
  rainfallPostController(req, res) {
    try {
      const {town} = req.body;
      const data="Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" + "\n" +
    "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" + "\n" +
    "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
    "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
    "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
    "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
    "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
    "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
    "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" + "\n" +
    "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7";
    let myData={
      errorTown: 1,
      rainFall:[],
      avgFall: 0,
      varianceFall: 0
    }    
    const mean= (function(town, data) {
        let regTown=new RegExp(""+town+"\\W",'gi')       
        let searchTown=data.search(regTown);
        if (searchTown==-1) {
          myData.errorTown=-1;
          return -1
        } else {
        let startTownLine=data.indexOf(':',searchTown)
        let searchEndFallline=data.indexOf('\n',searchTown)
        let endTownLine=searchEndFallline==-1 ? data.length : searchEndFallline;       
        let rainFallArr=data.slice(startTownLine,endTownLine).split(/\W\w\w\w\s/);
        rainFallArr.shift();       
        myData.rainFall=rainFallArr;        
        let avg=rainFallArr.reduce((acum,currentVal)=>acum+=(+currentVal),0)/12;
        myData.avgFall=avg;
        return(avg);    
        }      
   })(town,data)

      const variance=(function(town, data) {
        let regTown=new RegExp(""+town+"\\W",'gi')          
          let searchTown=data.search(regTown);
          if (searchTown==-1) {
            myData.errorTown=-1;
            return -1
          } else {
          let startTownLine=data.indexOf(':',searchTown)
          let searchEndFallline=data.indexOf('\n',searchTown)
          let endTownLine=searchEndFallline==-1 ? data.length : searchEndFallline;       
          let rainFallArr=data.slice(startTownLine,endTownLine).split(/\W\w\w\w\s/);
          rainFallArr.shift();       
          myData.rainFall=rainFallArr;        
          let avg=rainFallArr.reduce((acum,currentVal)=>acum+=(+currentVal),0)/12;
          myData.avgFall=avg;          
          myData.varianceFall=myData.rainFall.reduce((acum,currentVal)=>acum+=Math.pow((currentVal-myData.avgFall),2),0)/12;  
        return myData.varianceFall;
      }
    })(town, data)      
      res.status(200).json({
          result: {mean,variance}
      });
    } catch (e) {
      errorHandler(res, e);
    }},

  
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
