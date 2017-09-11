const express = require('express');

const routes = function(Song) {
    const songRoutes = express.Router();
    const songController = require('./controllers/song.server.controller')(Song);

    songRoutes.route('/')
        .get(songController.get)
        .post(songController.post);

    songRoutes.route('/:songId')
        .get(function(req, res) {

        })
};
