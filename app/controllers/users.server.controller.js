var _ = require('lodash');

module.exports = _.extend(
    require('./users/users.authentication.server.controller'),
    require('./users/users.profile.server.controller')
);
