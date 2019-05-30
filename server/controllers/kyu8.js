const errorHandler=require('../utils/errorHandlers')

module.exports = {
    showAllTasks(req, res) {
        res.status(200)
            .json({

                "stas": ["Pole Vault Starting Marks", "Keep Hydrated!"],
                "maks": ["Count of positives / sum of negatives","Convert a String to a Number!"],
                "oleh": ["Volume of a Cuboid","Miles per gallon to kilometers per liter"],
                "oleksiy": ["Wilson primes","Formatting decimal places #0"],
                "ostap": ["Holiday VIII - Duty Free","Simple validation of a username with regex"],
                "nadiia": ["My head is at the wrong end!","To square(root) or not to square(root)"],
                "bohdan": ["Find numbers which are divisible by given number", "Geometry Basics: Circle Area in 2D"],
                "ruslan": ["Heads and Legs","Short Long Short"]           
            });
    },
   
    Pole_Vault_Starting_MarksInfo(req, res) {
        res.status(200).send(
            `<p style="color:red">For a pole vaulter, it is very important to begin the approach run at the best possible starting mark. This is affected by numerous factors and requires fine-tuning in practice. But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.
            This guideline was taught to me in feet and inches, but due to the international nature of Codewars, I am creating this kata to use metric units instead.
            You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.
            You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.
            Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship. But there is also a constant offset involved. If you can determine the rate of change described above, you should be able to determine that constant offset </p>`
        )
    },
    Keep_HydratedInfo(req ,res){
        res.status(200).send(
            `<p style="color:red">Nathan loves cycling.
            Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
            You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.</br>
            For example: </br>            
            time = 3 ----> litres = 1   </br>         
            time = 6.7---> litres = 3        </br>    
            time = 11.8--> litres = 5 </p>`
        )
    },
    Pole_Vault_Starting_MarksRun(req, res) {
        try {
            const {num}=req.body;
            
            if (typeof(num)!=='number'){throw new Error('please enter a number!')}
            const diff = (10.67 - 9.45) / (1.83 - 1.52);
            let result= Math.round((10.67 + diff * num - diff * 1.83) * 100) / 100;
            res.status(200).send(
                `<h1>${result}</h1> `
                )
        } catch(e) {
            errorHandler(res,e)
        }
    },

    divisibleByInfo(req, res) {
        res.status(200)
            .json({
                body: "Find numbers which are divisible by given number (JavaScript)"
            });
    },

    divisibleByRun(req, res) {
        const { numbers, divisor } = req.body;

        const divisibleBy = (numbers, divisor) => {
            numbers = numbers || [0];
            divisor = divisor || 1;

            let divisible = [];
            numbers.map((value) => {
                if (value % divisor === 0)
                    divisible.push(value)
            })

            return divisible;
        }

        res.status(201)
            .json({
                result: divisibleBy(numbers, divisor)
            });
    },

    circleAreaInfo(req, res) {
        res.status(200)
            .json({
                body: "Geometry Basics: Circle Area in 2D (JavaScript)"
            });
    },

    circleAreaRun(req, res) {
        const { circle } = req.body;
        const circleArea = circle => circle.radius ** 2 * Math.PI;

        res.status(201)
            .json({
                result: circleArea(circle)
            });
    }
}

