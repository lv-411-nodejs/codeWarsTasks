const errorHandler = require('../helpers/errorHandlers');
const Validator = require('../helpers/validator');
const validator = require('../helpers/validator');

module.exports = {
  showAllTasks(req, res) {
    res.status(200).json({
      stas: ['Pole Vault Starting Marks', 'Keep Hydrated!'],
      max: ['Count of positives / sum of negatives', 'Convert a String to a Number!'],
      oleh: ['Volume of a Cuboid', 'Miles per gallon to kilometers per liter'],
      oleksiy: ['Wilson primes', 'Formatting decimal places #0'],
      ostap: ['Holiday VIII - Duty Free', 'Simple validation of a username with regex'],
      nadiia: ['My head is at the wrong end!', 'To square(root) or not to square(root)'],
      bohdan: ['Find numbers which are divisible by given number', 'Geometry Basics: Circle Area in 2D'],
      ruslan: ['Heads and Legs', 'Short Long Short'],
    });
  },

  Pole_Vault_Starting_MarksInfo(req, res) {
    res.status(200).json({
      info: 'Pole Vault Starting Marks',
    });
  },

  Keep_HydratedInfo(req, res) {
    res.status(200).json({
      info: 'Keep Hydrated!',
    });
  },

  Pole_Vault_Starting_MarksRun(req, res) {
    try {
      const {
        num,
      } = req.body;
      if (typeof num !== 'number') {
        throw new Error('please enter a number!');
      }
      const diff = (10.67 - 9.45) / (1.83 - 1.52);
      const result = Math.round((10.67 + diff * num - diff * 1.83) * 100) / 100;
      res.status(200).send(`<h1>${result}</h1> `);
    } catch (e) {
      errorHandler(res, e);
    }
  },

  Keep_HydratedRun(req, res) {
    const {
      time,
    } = req.body;
    const litres = (time) => {
      return Math.floor(time * 0.5);
    };
    res.status(201).json({
      result: litres(time),
    });
  },

  divisibleByGetController(req, res) {
    res.status(200).json({
      body: 'Find numbers which are divisible by given number (JavaScript)',
      link: 'https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number',
    });
  },

  divisibleByPostController(req, res) {
    const {
      numbers,
      divisor,
    } = req.body;

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

    try {
      const v = new validator([numbers, divisor]);

      res.status(200).json({
        result: divisibleBy(numbers, divisor),
      });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },

  circleAreaGetController(req, res) {
    res.status(200).json({
      body: 'Geometry Basics: Circle Area in 2D (JavaScript)',
      link: 'https://www.codewars.com/kata/geometry-basics-circle-area-in-2d',
    });
  },

  circleAreaPostController(req, res) {
    const {
      circle,
    } = req.body;

    const circleArea = (circle) => circle.radius ** 2 * Math.PI;

    try {
      const v = new validator([circle]);
      v.checkArgumentsTypes(['object']);

      res.status(200).json({
        result: circleArea(circle),
      });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },

  animalGetController(req, res) {
    res.status(200).json({
      body: 'Heads and Legs',
      link: 'https://www.codewars.com/kata/heads-and-legs',
    });
  },

  animalPostController(req, res) {
    try {
      const {heads, legs} = req.body;
      const errorHandler = new Validator([heads, legs]);
      errorHandler.checkArgumentsTypes(['number', 'number']);
      const animals = (heads, legs) => {
        const cows = (legs - heads * 2) / 2;
        const chickens = heads - cows;
        if (cows > heads || (cows ^ 0) !== cows || chickens > heads || (chickens ^ 0) !== chickens) {
          return 'No solutions';
        } else return [chickens, cows];
      };
      res.status(201).json({
        result: animals(heads, legs),
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  solutionGetController(req, res) {
    res.status(200).json({
      body: 'Short Long Short',
      link: 'https://www.codewars.com/kata/short-long-short',
    });
  },

  solutionPostController(req, res) {
    try {
      const {a, b} = req.body;
      const errorHandler = new Validator([a, b]);
      errorHandler.checkArgumentsTypes(['string', 'string']);
      const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

      res.status(201).json({
        result: solution(a, b),
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  getVolumeOfCuboidGetController(req, res) {
    res.status(200).json({
      info: 'Volume of a Cuboid',
      link: 'https://www.codewars.com/kata/volume-of-a-cuboid',
      in: [{
        length: 1,
        width: 2,
        height: 2,
      },
      {
        length: 6.3,
        width: 2,
        height: 5,
      },
      ],
      out: [4, 63],
    });
  },

  converterGetController(req, res) {
    res.status(200).json({
      info: 'Miles per gallon to kilometers per liter',
      link: 'https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter',
      in: [{
        mpg: 10,
      },
      {
        mpg: 20,
      },
      {
        mpg: 30,
      },
      ],
      out: [3.54, 7.08, 10.62],
    });
  },

  converterPostController(req, res) {
    try {
      const {
        mpg,
      } = req.body;
      const result = ((mpg) => ((mpg * 1.609344) / 4.54609188).toFixed(2))(mpg);
      res.status(200).json({
        result,
      });
    } catch (e) {
      errorHandler(res, e);
    }
  },

  getVolumeOfCuboidPostController(req, res) {
    try {
      const {
        length,
        width,
        height,
      } = req.body;
      const result = ((length, width, height) => length * width * height)(length, width, height);
      res.status(200).json({
        result,
      });
    } catch (e) {
      errorHandler(res, e);
    }
  },

  amIWilsonGetController(req, res) {
    res.status(200).json({
      body: 'Wilson primes',
      link: 'https://www.codewars.com/kata/wilson-primes',
    });
  },

  amIWilsonPostController(req, res) {
    const {p} = req.body;
    const amIWilson = (p) => {
      function fact(x) {
        return x <= 1 ? 1 : x * fact(x - 1);
      }

      return (fact(p - 1) + 1) / (p * p) % 1 === 0;
    };

    try {
      const validatorArg = new validator([p]);
      validatorArg.checkArgumentsTypes(['number']);

      res.status(200)
          .json({
            result: amIWilson(p),
          });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },

  twoDecimalPlacesGetController(req, res) {
    res.status(200).json({
      body: 'Formatting decimal places',
      link: 'https://www.codewars.com/kata/formatting-decimal-places-number-0',
    });
  },

  twoDecimalPlacesPostController(req, res) {
    const {n} = req.body;
    const twoDecimalPlaces = (n) => +n.toFixed(2);

    try {
      const validatorArg = new validator([n]);
      validatorArg.checkArgumentsTypes(['number']);

      res.status(200)
          .json({
            result: twoDecimalPlaces(n),
          });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },

  countPositivesSumNegativesGetController(req, res) {
    res.status(200).json({
      body: 'Count of positives / sum of negatives',
      link: 'https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives',
    });
  },

  countPositivesSumNegativesPostController(req, res) {
    const input = req.body;
    const countPositivesSumNegatives = (input) => {
      let positive = 0;
      let negative = 0;

      if (input === [] || input === null || input < 1) {
        return [];
      }

      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          positive += 1;
        } else {
          negative += input[i];
        }
      }
      return [positive, negative];
    };
    res.status(200).json({
      result: countPositivesSumNegatives(input),
    });
  },

  stringToNumberGetController(req, res) {
    res.status(200).json({
      body: 'Convert a String to a Number!',
      link: 'https://www.codewars.com/kata/convert-a-string-to-a-number',
    });
  },

  stringToNumberPostController(req, res) {
    const n = req.body;
    const stringToNumber = (n) => {
      return Number(n);
    };
    res.status(200).json({
      result: stringToNumber(n),
    });
  },

  squareOrSquareRootGetController(req, res) {
    res.status(200).json({
      body: 'To square(root) or not to square(root)',
      link: 'https://www.codewars.com/kata/to-square-root-or-not-to-square-root',
    });
  },

  squareOrSquareRootPostController(req, res) {
    const {arr} = req.body;
    const squareOrSquareRoot = (arr) => {
      return arr.map((el) => {
        return Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2);
      });
    };
    try {
      const validate = new validator([arr]);
      validate.checkArgumentsTypes(['array']);

      res.status(200).json({
        result: squareOrSquareRoot(arr),
      });
    } catch (error) {
      res.status(400)
          .json({
            error: error.message,
          });
    }
  },

  fixTheMeerkatGetController(req, res) {
    res.status(200).json({
      body: 'My head is at the wrong end!',
      link: 'https://www.codewars.com/kata/my-head-is-at-the-wrong-end',
    });
  },

  fixTheMeerkatPostController(req, res) {
    const {arr} = req.body;
    const fixTheMeerkat = (arr) => arr.reverse();
    try {
      const validate = new validator([arr]);
      validate.checkArgumentsTypes(['array']);

      res.status(200).json({
        result: fixTheMeerkat(arr),
      });
    } catch (error) {
      res.status(400)
          .json({
            error: error.message,
          });
    }
  },

  Holiday_VIII_Duty_FreeInfo(req, res) {
    res.status(200).json({
      body: 'Holiday VIII - Duty Free',
    });
  },
  Holiday_VIII_Duty_FreeRun(req, res) {
    const {
      normPrice,
      discount,
      hol,
    } = req.body;

    const dutyFree = (normPrice, discount, hol) => {
      const saving = (normPrice * discount) / 100;
      return Math.floor(hol / saving);
    };
    res.status(200).json({
      result: dutyFree(normPrice, discount, hol),
    });
  },
  Simple_validation_usernameInfo(req, res) {
    res.status(200).json({
      body: 'Simple validation of a username with regex',
    });
  },

  Simple_validation_usernameRun(req, res) {
    const {
      username,
    } = req.body;

    const validateUsr = (username) => {
      return /^[0-9a-z_]{4,16}$/.test(username);
    };
    res.status(200).json({
      result: validateUsr(username),
    });
  },
};
