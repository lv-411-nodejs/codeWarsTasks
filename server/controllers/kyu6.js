module.exports = {

    pileOfCubesInfo(req, res) {
        res.status(200)
            .json({
                body: "Build a pile of Cubes (JavaScript)"
            });
    },

    pileOfCubesRun(req, res) {
        const { m } = req.body;

        const findNb = (m) => {
            var x = 0;
            while (m > 0) {
                x += 1;
                m = m - x ** 3;
            }

            return m ? -1 : x;
        }

        res.status(201)
            .json({
                result: findNb(m)
            });
    }
}
