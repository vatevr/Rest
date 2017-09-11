const songController = function(Song) {
    const post = (req, res) => {
        const song = new Song(req.body);

        if (!req.body.title) {
            res.status(500);
            res.send('Title for the song is required');
        } else {
            song.save();
            res.status(201);
            res.send(song);
        }
    };

    const get = (req, res) => {
        let query = {};
        if (req.query.artist) {
            query.artist = req.query.artist;
        }

        Song.find(query, function (err, songs) {

        });
    };

    return {
        post: post,
        get: get
    };
};
