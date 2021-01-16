var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', (err, results, fields) => {
        if(err) { throw err; }
      });
    }, // a function which produces all the messages
    post: function (currentMessage) {
      var messagePost = `INSERT INTO messages (message) VALUES ($(currentMessage))`;
      db.query(messagePost, function (err, result) {
        if (err) { throw err; }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT * FROM users', (err, results, fields) => {
        if (err) { throw err; }
      });
    },
    post: function (userName) {
      var userPost = `INSERT INTO users (name) VALUES ($(userName))`;
      db.query(userPost, function (err, result) {
        if (err) { throw err; }
      });
    }
  }
};

