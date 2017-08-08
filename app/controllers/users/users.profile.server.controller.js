'use strict';

var _ = require('lodash'),
    mongoose = require('mongoose');

exports.getUser = function(req, res) {
    var _user = req.user;
    delete _user.password;
    delete _user.salt;
    delete _user.provider;
    delete _user.__v;

    res.json(req.user || null);
    res.end();
};

exports.update = function(req, res) {
    var user = req.user;

    if (user) {
        _.extend(user, req.body);
        user.updated = Date.now();

        user.save((err) => {
            if (err) {
                return res.status(500).send({
                    message: 'User could not be saved'
                });
            }

            req.login(user, (loginErr) => {
                if (err) {
                    res.status(500).send(loginErr);
                } else {
                    res.json(user);
                }
            });
        });
    }
};
