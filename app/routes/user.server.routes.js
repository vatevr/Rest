var passport = require('passport'),
    config = require('../../config/config'),
    auth = require('../../config/passport_helpers');

module.exports = (app) => {
    var users = require('../../app/controllers/users.server.controller');

    app.route('/users/me').get(auth.isAuthenticatedOrApiKey, users.getUser);
    app.route('/users').put(auth.isAuthenticatedOrApiKey, users.update);

};
