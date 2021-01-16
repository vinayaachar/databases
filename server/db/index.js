var mysql = require('mysql');

var Sequelize = require('Sequelize');
var rom = new Sequelize('chatnew', 'root');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;





