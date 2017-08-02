var express = require('express');

var routes = function(Author) {
    const authorRouter = express.Router();

    authorRouter.route('/')
        .post((req, res) => {
            var author = new Author(req.body);

            author.save();
            res.status(201).send(author);
        })
        .get((req, res) => {
            var query = {};
            if (req.query.name) {
                query.name = req.query.name;
            }
            Author.find(query, (req, res) => {
                
            });
        });
}
