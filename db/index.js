var Sequelize = require('sequelize');
var sequelize = new Sequelize('UserDb','root','');

//define model

var Users = sequelize.define('users', {
  userId: {primaryKey: true, type: Sequelize.INTEGER,
    autoIncrement: true},
  phone: Sequelize.INTEGER,
  username: Sequelize.STRING,
  tagline: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  location: Sequelize.STRING,
  image: Sequelize.BLOB,
  field: Sequelize.STRING,
  company: Sequelize.STRING
});


Users.sync({force: true});

var Connections = sequelize.define('connections', {
  connectionId: {primaryKey: true, type: Sequelize.INTEGER,
    autoIncrement: true},
 });

Connections.sync({force: true});

Users.belongsToMany(Users, {as: 'Connection', through: Connections})

exports.Users = Users;
exports.Connections = Connections;
// exports.sequelize = sequelize;