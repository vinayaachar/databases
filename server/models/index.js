var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages', (err, result) => {
        if(err) {
          throw err;
        } else {
          cb(null, result);
        }
      });
    }, // a function which produces all the messages
    post: function (params, cb) {
      var messagePost = `INSERT INTO messages (message) VALUES (?)`;
      db.query(messagePost, params, function (err, result) {
        if(err) {
          throw err;
        } else {
          cb(null, result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * FROM users', (err, result) => {
        if(err) {
          throw err;
        } else {
          cb(null, result);
        }
      });
    },
    post: function (params, cb) {
      var userPost = `INSERT INTO users (name) VALUES (?)`;
      db.query(userPost, params, function (err, result) {
        if(err) {
          throw err;
        } else {
          cb(null, result);
        }
      });
    }
  }
};

