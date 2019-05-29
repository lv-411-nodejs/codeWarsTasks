const kyu8 = require('../controllers/kyu8');

module.exports = app => {
    app.get('/api/8tasks', kyu8.showAllTasks);
    app.get('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksInfo);
    app.get('/api/task/kyu8/Keep_Hydrated!', kyu8.Keep_HydratedInfo);
    app.post('/api/task/kyu8/Pole_Vault_Starting_Marks', kyu8.Pole_Vault_Starting_MarksRun);
    // app.post('/api/task/kyu8/Keep_Hydrated!', kyu8.Keep_HydratedRun);

}