module.exports = {

  newAvgInfo(req, res) {
    res.status(200)
        .json({
          body: 'Looking for a benefactor',
        });
  },

  newAvgRun(req, res) {
    const {arr, newavg} = req.body;

    const newAvg = (arr, newavg) => {
      const totalSum = arr.reduce((total, current) => total + current, 0);
      const result = newavg * (arr.length + 1) - totalSum;

      if (result < 0) throw new RangeError('Error');
      return Math.ceil(result);
    };

    res.status(201)
        .json({
          result: newAvg(arr, newavg),
        });
  },
};
