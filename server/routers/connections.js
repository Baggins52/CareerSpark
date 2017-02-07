var express = require('express');
var router = express.Router();
var db = require('../../db/controllers/Controller.js');

router.route('/')
  // returns all connections
  .get(function(req, res) {
      db.getAllConnections(function(data) {
     	  res.send(data);
     })
  })

  // accepts pending connection if it already exists. Otherwise, creates new pending connection.
  .post(function(req, res) {
    var userId1 = req.body.sourceUserId;
  	var userId2 = req.body.targetUserId;
  	db.addConnection(userId1,userId2, function(result) {
  		if (result === null) {
        res.send(null)
      } else {
      res.send(result.dataValues)
      }
  	})
  	
  });

module.exports = router;