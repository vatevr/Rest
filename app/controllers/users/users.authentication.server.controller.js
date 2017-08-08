var errorHandler = require('../errors.server.controller'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    config = require('../../../config/config'),
    User = mongoose.model('User'),
    tokgen = require('../../libs/tokenGenerator');

var nev = require('email-verification')(mongoose);

exports.validateVerificationToken = function() {

};
