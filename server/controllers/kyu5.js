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

    res.status(201)
        .json({
          result: smallest(n),
        });
  },

  zerosInfo(req, res) {
    res.status(200)
      .json({
        body: 'Number of trailing zeros of N!'
    });
  },

  zerosRun(req, res) {
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

    res.status(200)
      .json({
        result: zeros(n),
    });
  },

  artificialRainInfo(req, res) {
    res.status(200)
      .json({
        body: 'Artificial Rain'
    });
  },

  artificialRainRun(req, res) {
    const {garden} = req.body;

    const artificialRain = (garden) => {
      const answers = [];
  
  const checkLeft = (position) => {
    if(position > 0) {
      let sum = 0;
      for (let i = position; i >= 0; i--) {
        if(garden[i-1] <= garden[i]){
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
    if(position > 0) {
      let sum = 0;
      for (let i = position, max = garden.length; i < max; i++) {
        if(garden[i+1] <= garden[i]){
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
  
  for(let i = 0, max = garden.length; i < max; i++) {
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
