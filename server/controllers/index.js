const { Message, User } = require('../db');
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User]})
        .complete(function(err, results) {
          res.json(results);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.findorCreate({username: req.body.username})
        .complete(function(err, user) {
          var params = {
            message: req.body.message,
            roomname: req.body.roomname
          };
          Message.create(params)
            .complete((err, results) => {
              res.sendStatus(201);
            });
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results) {
          res.json(results);
        });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.create({username: req.body.username})
        .complete((err, user) => {
          res.sendStatus(201);
        });
    }
  }
};

