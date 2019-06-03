
const errorHandler = require('../helpers/errorHandlers');

module.exports = {
  showAllTasks(req, res) {
    res.status(200)
        .json({
          'stas': ['Pole Vault Starting Marks', 'Keep Hydrated!'],
          'maks': ['Count of positives / sum of negatives', 'Convert a String to a Number!'],
          'oleh': ['Volume of a Cuboid', 'Miles per gallon to kilometers per liter'],
          'oleksiy': ['Wilson primes', 'Formatting decimal places #0'],
          'ostap': ['Holiday VIII - Duty Free', 'Simple validation of a username with regex'],
          'nadiia': ['My head is at the wrong end!', 'To square(root) or not to square(root)'],
          'bohdan': ['Find numbers which are divisible by given number', 'Geometry Basics: Circle Area in 2D'],
          'ruslan': ['Heads and Legs', 'Short Long Short'],
        });
  },

  amIWilsonInfo(req, res) {
    res.status(200)
        .json({
          body: 'Wilson primes',
        });
  },

  amIWilsonRun(req, res) {
    const {p} = req.body;
      const amIWilson = (p) => {
        function fact(x) {
          return x <= 1 ? 1 : x * fact(x - 1);
        }
  
        return (fact(p - 1) + 1) / (p * p) % 1 === 0;
      };
      res.status(200)
          .json({
            result: amIWilson(p),
          });
  },

  twoDecimalPlacesInfo(req, res) {
    res.status(200).json({
      body: 'Formatting decimal places',
    });
  },

  twoDecimalPlacesRun(req, res) {
    const {n} = req.body;

    const twoDecimalPlaces = (n) => +n.toFixed(2);

    res.status(200)
        .json({
          result: twoDecimalPlaces(n),
        });
  },
};
