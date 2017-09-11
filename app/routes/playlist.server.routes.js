var express = require('express');

const routes = function(Playlist) {
    const playlistRouter = express.Router();
    const playlistController = require('../controllers/playlist.server.controller')(Playlist);

    playlistRouter.route('/')
        .get(playlistController.get)
        .post(playlistController.post);


    playlistRouter.use('/:playlistId', function(req, res, next) {
        Playlist.findById(req.params.playlistId, function(playlist, err) {
            if (err) {
                res.status(500).send(err);
            } else if (playlist) {
                req.playlist = playlist;
                next();
            } else {
                res.status(404).send('Playlist not found');
            }
        });
    });

    playlistRouter.route('/:playlistId')
        .get(function(req, res) {
            return res.json(req.playlist);
        });

    return playlistRouter;
};

module.exports = routes;


