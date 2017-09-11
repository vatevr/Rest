var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Track = require('./song.server.model').schema,
    User = require('./user.server.model').schema;

var playlistSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    createdBy: User,
    privacy: {
        type: String,
        default: 'Public'
    },
    tracks: {
        type: [Track],
        default: []
    }
});

var Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
