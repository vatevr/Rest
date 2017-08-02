var should = require('should'),
    sinon = require('sinon');

describe('Book Controller Tests', () => {
    describe('Post', () => {
        it('Should not allow an empty title on post', () => {
            var Book = function(book){ this.save = function(){} };

            var req = {
                body: {
                    author: 'Me'
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            const bookController = require('../controllers/bookController')(Book);

            bookController.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad status' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
});