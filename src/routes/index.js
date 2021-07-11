const Site = require('./site');
const ApiUser = require('./apiUser');

function route(app) {
    app.use('/', Site);
    app.use('/user', ApiUser);
}

module.exports = route;
