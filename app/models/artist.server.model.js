var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var artistSchema = new Schema({
    name: {
        type: String,
        unique: 'Artist already exists',
    }
});

var Artist = mongoose.model('Artist', artistSchema);

module.exports = {
    schema: artistSchema,
    model: Artist
};
