
const errorHandler = require('../helpers/errorHandlers');

module.exports = {
  showAllTasks(req, res) {
    res.status(200)
        .json({
          'stas': ['Pole Vault Starting Marks',
            'Keep Hydrated!'],
          'maks': ['Count of positives / sum of negatives',
            'Convert a String to a Number!'],
          'oleh': ['Volume of a Cuboid',
            'Miles per gallon to kilometers per liter'],
          'oleksiy': ['Wilson primes',
            'Formatting decimal places #0'],
          'ostap': ['Holiday VIII - Duty Free',
            'Simple validation of a username with regex'],
          'nadiia': ['My head is at the wrong end!',
            'To square(root) or not to square(root)'],
          'bohdan': ['Find numbers which are divisible by given number',
            'Geometry Basics: Circle Area in 2D'],
          'ruslan': ['Heads and Legs',
            'Short Long Short'],
        });
  },

  Pole_Vault_Starting_MarksInfo(req, res) {
    res.status(200).json({
      'info': 'Name of Kata',
    });
  },
  Keep_HydratedInfo(req, res) {
    res.status(200).json({
      'info': 'Name of Kata',
    });
  },
  Pole_Vault_Starting_MarksRun(req, res) {
    try {
      const {num} = req.body;

      if (typeof (num) !== 'number') {
        throw new Error('please enter a number!');
      }
      const diff = (10.67 - 9.45) / (1.83 - 1.52);
      const result = Math.round((10.67 + diff * num - diff * 1.83) * 100) / 100;
      res.status(200).send(
          `<h1>${result}</h1> `
      );
    } catch (e) {
      errorHandler(res, e);
    }
  },

  divisibleByInfo(req, res) {
    res.status(200)
        .json({
          body: 'Find numbers which are divisible by given number (JavaScript)',
        });
  },

  divisibleByRun(req, res) {
    const {numbers, divisor} = req.body;

    const divisibleBy = (numbers, divisor) => {
      numbers = numbers || [0];
      divisor = divisor || 1;

      const divisible = [];
      numbers.map((value) => {
        if (value % divisor === 0) {
          divisible.push(value);
        }
      });

      return divisible;
    };

    res.status(201)
        .json({
          result: divisibleBy(numbers, divisor),
        });
  },

  circleAreaInfo(req, res) {
    res.status(200)
        .json({
          body: 'Geometry Basics: Circle Area in 2D (JavaScript)',
        });
  },

  circleAreaRun(req, res) {
    const {circle} = req.body;
    const circleArea = (circle) => circle.radius ** 2 * Math.PI;

    res.status(201)
        .json({
          result: circleArea(circle),
        });
  },


  animalGetController(req, res) {
    res.status(200)
        .json({
          body: 'Heads and Legs',
          link: 'https://www.codewars.com/kata/heads-and-legs',
        });
  },

  animalPostController(req, res) {
    const {heads, legs} = req.body;
    const animals = (heads, legs) => {
      const cows = (legs - heads * 2) / 2;
      const chickens = heads - cows;
      return (cows > heads ||
        (cows ^ 0) !== cows ||
        chickens > heads ||
        (chickens ^ 0) !== chickens) ? 'No solutions' : [chickens, cows];
    };
    res.status(201)
        .json({
          result: animals(heads, legs),
        });
  },

  solutionGetController(req, res) {
    res.status(200)
        .json({
          body: 'Short Long Short',
          link: 'https://www.codewars.com/kata/short-long-short',
        });
  },

  solutionPostController(req, res) {
    const {a, b} = req.body;
    const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;

    res.status(201)
        .json({
          result: solution(a, b),
        });
  },
  volume_of_a_cuboidInfo(req, res) {
    res.status(200).send(
        'https://www.codewars.com/kata/volume-of-a-cuboid'
    );
  },
  miles_per_gallon_to_kilometers_per_literInfo(req, res) {
    res.status(200).send(
        'https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter'
    );
  },
  volume_of_a_cuboidRun(req, res) {
    try {
      const {mpg} = req.body;
      const result = (mpg) => +(mpg * 1.609344 / 4.54609188).toFixed(2);
      res.status(200).send(
          `${result(mpg)}`
      );
    } catch (e) {
      errorHandler(res, e);
    }
  },
  miles_per_gallon_to_kilometers_per_literRun(req, res) {
    try {
      const {length, width, height} = req.body;

      const getVolumeOfCuboid = function(length, width, height) {
        return length * width * height;
      };

      const result = getVolumeOfCuboid(length, width, height);
      res.status(200).send(
          `${result}`
      );
    } catch (e) {
      errorHandler(res, e);
    }
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
      const fact = function(x) {
        return x <= 1 ? 1 : x * fact(x - 1);
      };

      return (fact(p - 1) + 1) / (p * p) % 1 === 0;
    };
    res.status(201)
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
