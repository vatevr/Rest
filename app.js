var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = process.env.ENV === 'test' ?
    mongoose.connect('mongodb://localhost/bookAPI_test') : mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./app/models/bookModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter = require('./app/routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log('Running on Port:' + port );
});

module.exports = app;
