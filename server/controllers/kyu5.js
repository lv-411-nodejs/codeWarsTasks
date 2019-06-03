const errorHandler = require('../helpers/errorHandlers');
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
  gapGetController(req, res) {
    res.status(200).json({
        info: 'Gap in Primes',
        link: 'https://www.codewars.com/kata/gap-in-primes',
        in: [{"g": 2, "m": 100, "n": 110}, 
             {"g": 4, "m": 100, "n": 110},
             {"g": 6, "m": 100, "n": 110},
             {"g": 8, "m": 300, "n": 400},
             {"g": 10, "m": 300, "n": 400}],
        out: [[101,103],[103,107],null,[359,367],[337,347]]
    });
  },
  gapPostController(req, res) {
    try {
      const {g,m,n} = req.body;
      function gap(g,m,n){
        let unswer=[];
        let primeNumbers=[];
        primeNumbers.length=n+1;
        primeNumbers.fill(0,0,n+1)
        for (let i=2; i*i<n+1; i++){
          if (primeNumbers[i]==0) {
            for (let k=i*i; k<n+1; k+=i) {
              primeNumbers[k]=1
            }
          }  
        }
          let interimGap=0, interimNumber=m;
          while(m<=n+1-g){ 
           if ((primeNumbers[m]==0) && (primeNumbers[m+g]==0)) {
               let isPrimeBetween=false;
               for (let f=m+1; f<=(m+g-1); f++) {
                   if (primeNumbers[f]==0){
                   isPrimeBetween=true;  
                 }
               }
               if (!isPrimeBetween){
               unswer[0]=m; unswer[1]=m+g; 
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
      const result = gap(g,m,n);
      res.status(200).json({
          result
      });
    } catch (e) {
      errorHandler(res, e);
    }
  }
};
