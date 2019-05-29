module.exports = {

    whichXInfo(req, res) {
        res.status(200)
            .json({
                body: "Which x for that sum?"
            });
    },

    whichXRun(req, res) {
        const { m } = req.body;

        const solve = (m) => {

            return m;
        }

        res.status(201)
            .json({
                result: solve(m)
            });
    }
}
