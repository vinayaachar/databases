var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          thow(err);
        } else {
          res.send(data);
        }
      });
      //next();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.message, (err, data) => {
        if (err) {
          throw (err);
        } else {
          res.sendStatus(200);
        }
      });
      //next();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          thow(err);
        } else {
          res.send(data);
        }
      });
      //next();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('Controller', req.body);
      models.users.post(req.body.username, (err) => {
        if (err) {
          throw (err);
        } else {
          //res.send('Successfully posted', data);
          res.sendStatus(200);
        }
      });
      //next();
    }
  }
};

