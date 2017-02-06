var express = require('express');
var router = express.Router();
var db = require('../../db/controllers/Controller.js');

// when URL ending is: .../api/connections
router.route('/')
  // returns all connections
  .get(function(req, res) {
      db.getAllConnections(function(data) {
     	  res.send(data);
     })
  })
  // posts new connection, and returns it. *TO DO: error handling (e.g., when connection already exists)
  // KG: TO DO: if connection is not in DB, it creates it as pending. If it is already in DB, it accepts it.
  .post(function(req, res) {
  	console.log('HANDLING POST REQUEST');

    var userId1 = req.body.sourceUserId;
  	var userId2 = req.body.targetUserId;

    console.log(userId1)
    console.log(userId2)
  	db.addConnection(userId1,userId2, function(result) {
  		if (result === null) {
        console.log(null)
        res.send(null)
      } else {
      console.log(result.dataValues);
      res.send(result.dataValues)
      }
  	})
  	
  });

// accepts a pending connection, by connection ID.
// Sample URL:  /api/connections/14
router.route('/:idOfConnectionToAccept')
  .get(function(req, res) {
  	var connectionId = req.url.slice(1);
    console.log('connectionID ====> ', connectionId)
    // sets pending to false
    db.acceptConnection(connectionId, function(result) {
      res.send(result);
    })
  });

module.exports = router;