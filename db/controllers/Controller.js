var model = require('../index.js');



/****
USER CONTROLLERS
****/

// //write our queries
// //retrieve all users
exports.getUserId = function(username, callback) {
  model.Users.findAll({where: {username: username}}).then(function(result) {
     callback(result[0].dataValues.userId);
  });
}

exports.findAllUsers = function(callback) {
  model.Users.findAll().then(function(result) {
     callback(result);
  })
}

exports.findUserById = function(id, callback) {
  model.Users.findOne({
    where: {
      userId: id
    }
  }).then(function(results) {callback(results)})
};

exports.findUserByUserName = function(username, callback) {
  model.Users.findAll({where: {username: username}}).
    then(function(results) {callback(results)});
}

exports.findAllUsersByLocation = function(location, callback) {
  model.Users.findAll({where: {location: location}}).
    then(function(results) {callback(results)});
}

exports.findUserByUserName = function(username, callback) {
  model.Users.findAll({where: {username: username}}).
    then(function(results) {callback(results)});
}


exports.findAllUsersByLocation = function(location, callback) {
  model.Users.findAll({
    where: {
      location: location
    }
  }).then(function(results) {callback(results)});
}


exports.findAllUsersByLocationAndField = function(location, field, callback) {
  model.Users.findAll({
    where: {
      location: location, field: field
    }
  }).then(function(results) {callback(results)});
}


exports.findAllUsersByCompany = function(company, callback) {
  model.Users.findAll({
    where: {
      company: company
    }
  }).then(function(results) {callback(results)});
}

exports.addUser = function(user, callback) {
  model.Users.create(user).then(function(result) {
    callback(result);
  });
}

exports.deleteUser = function(userId, callback) {
  model.Users.destroy({
    where: {
      userId: userId
    }
  }).then(function(result) {callback(result)});
}

/****
  Connection Controllers
****/


// NOTE: addConnection is the main function currently used by the clinet.
// First, it checks to see if a pending connection between sourceUser -> targetUser already exists.
// If it does already exist, it changes pending to false (i.e., accepts the connection)
// If not, it creates a pending connection.
exports.addConnection = function(sourceUserId, targetUserId, callback) {
  // First, check to see if connection is in the DB.
  model.Connections.findOne({
    where: {
      userUserId: sourceUserId,
      targetUserId: targetUserId
    }
  }).then(function(results) {
    // If it is, update it
    if (results !== null) {
      model.Connections.update({
        pending: false
      }, {
        where: {
          userUserId: sourceUserId,
          targetUserId: targetUserId
        }
      }).then(function(result) {callback(results)});
    // Otherwise, create the pending request
    } else {
      model.Connections.create({
      userUserId: sourceUserId,
      targetUserId: targetUserId,
      pending: true
    }).then(function(result) {callback(result)});
    }
  })
}


exports.acceptConnection = function(connectionId, callback) {
  model.Connections.update({
    pending: false,
  }, {
    where: {
      connectionId: connectionId
    }
  }).then(function(result) {callback(result)})
}

exports.getAllConnections = function(callback) {
  model.Connections.findAll().then(function(result) {callback(result)})
}


exports.getConnectionsBySourceId = function(sourceUserId, callback) {
  model.Connections.findAll({
    where: {
      userUserId: sourceUserId
    }
  }).then(function(result) {callback(result)});
}

exports.getConnectionsByTargetId = function(targetUserId, callback) {
  model.Connections.findAll({
    where: {
      targetUserId: targetUserId
    }
  }).then(function(result) {callback(result)});
}

exports.deleteConnection = function(userId, connectionId, callback) {
  model.Connections.destroy({
    where: {
      userUserId: userId,
      ConnectionUserId: connectionId
    }
  })
}

exports.getConnections = function(userId, callback) {
  model.Connections.findAll({where:  {userUserId:userId}})
    .then(function(result) {callback(result)});
}


