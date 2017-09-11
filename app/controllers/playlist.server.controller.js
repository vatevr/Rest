const playlistController = function(Playlist) {
    var post = function(req, res) {
        var playlist = new Playlist(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('Playlist name is required');
        } else {
            playlist.save();
            res.status(200);
            res.send(playlist);
        }
    };

    var get = function(req, res) {
        let query = {};
        if (req.query.createdBy) {
            query.createdBy = req.query.createdBy;
        }

        Playlist.find(query, (err, playlists) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(playlists);
            }
        });
    };

    return {
        post: post,
        get: get
    };
};

module.exports = playlistController;