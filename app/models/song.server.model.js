var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    artistSchema = require('./artist.server.model').schema;

var songSchema = new Schema({
    artist: artistSchema,
    title: {
        type: String,
        trim: true
    },
    duration: {
        type: Number
    }
});

var Song = mongoose.model('Song', songSchema);
module.exports = {
    schema: songSchema,
    model: Track
};
