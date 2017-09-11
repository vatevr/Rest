var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const db = process.env.ENV === 'test' ?
    mongoose.connect('mongodb://localhost/bookAPI_test') : mongoose.connect('mongodb://localhost/bookAPI');

const Book = require('./app/models/bookModel');
const Playlist = require('./app/models/playlist.server.model');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter = require('./app/routes/bookRoutes')(Book);
// usersRouter = require('./app/routes/user.server.routes')(app);
playlistRouter = require('./app/routes/playlist.server.routes')(Playlist);

app.use('/api/books', bookRouter);
app.use('/api/playlists', playlistRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/authors', authorRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log('Running on Port:' + port );
});

module.exports = app;
