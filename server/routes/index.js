const kyu8 = require('../controllers/kyu8');

module.exports = app => {
    app.get('/api/tasks', kyu8.showAllTasks);

    // app.get('/api/task/kyu8/square', kyu8.squareInfo);
    // app.post('/api/task/kyu8/square', kyu8.squareRun);

}