var mongoose = require('mongoose'),
    User = mongoose.model('User');

var nev = require('email-verification')(mongoose);

exports.validateVerificationToken = function() {

};

exports.signup = function(req, res) {
    delete req.body.roles;

    var user = new User(req.body);
    user.provider = 'local';

};
