module.exports = {
    showAllTasks(req, res) {

        res.status(200)
            .json({
                kyu8: [
                    'Circle Area',
                    'Divisible By'
                ],
                kyu7: [
                    'Series Sum'
                ],
                kyu6: [
                    'Pile Of Cubes'
                ],
                kyu5: [
                    'Which x for that sum'
                ]
            });
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
