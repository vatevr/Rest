var passport = require('passport'),
    auth = require('../../config/passport_helpers');

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');

    app.route('api/users/me').get(auth.isAuthenticatedOrApiKey, users.getUser);
    app.route('api/users').put(auth.isAuthenticatedOrApiKey, users.update);
    app.route('auth/signup').post(users.signup);
};
