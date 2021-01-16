const { Message, User } = require('../db');
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User]})
        .complete(function(err, results) {
          res.json(results);
        });
      // models.messages.get((err, data) => {
      //   if (err) {
      //     thow(err);
      //   } else {
      //     res.send(data);
      //   }
      // });
      //next();
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
      // models.messages.post(req.body.message, (err, data) => {
      //   if (err) {
      //     throw (err);
      //   } else {
      //     res.sendStatus(200);
      //   }
      // });
      //next();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results) {
          res.json(results);
        });

      // models.users.get((err, data) => {
      //   if (err) {
      //     thow(err);
      //   } else {
      //     res.send(data);
      //   }
      // });
      //next();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      User.create({username: req.body.username})
        .complete((err, user) => {
          res.sendStatus(201);
        });
      // console.log('Controller', req.body);
      // models.users.post(req.body.username, (err) => {
      //   if (err) {
      //     throw (err);
      //   } else {
      //     //res.send('Successfully posted', data);
      //     res.sendStatus(200);
      //   }
      // });
      //next();
    }
  }
};

