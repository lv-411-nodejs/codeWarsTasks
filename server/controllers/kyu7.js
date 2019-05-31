module.exports = {
  showAllTasks(req, res) {
    res.status(200)
        .json({
          'stas': ['Sum of a sequence'],
          'maks': ['Slamming Lockers'],
          'oleh': ['Where is Vasya?'],
          'oleksiy': ['Looking for a benefactor'],
          'ostap': ['Easy Line'],
          'nadiia': ['Recursive Replication'],
          'bohdan': ['Sum of the first nth term of Series'],
          'ruslan': ['Triple Shiftian Numbers'],
        });
  },

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

    res.status(200)
        .json({
          result: newAvg(arr, newavg),
        });
  },
};
