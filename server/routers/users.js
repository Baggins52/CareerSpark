var express = require('express');
var router = express.Router();

// import db Controllers
var db = require('../../db/controllers/Controller.js');


// when URL ending is: .../api/users
router.route('/')
  // sends back an array of all users
  .get(function(req, res) {
     db.findAllUsers(function(data) {
     	res.send(data);
     })
  })
  // posts new user, TO DO: Also upload their image to assets
  .post(function(req, res) {

    // The request body should look like a user. If using Postman, don't forget to select body as JSON.
    // Here's an example of a request body:
    // {
    //   "phone": 8675309,
    //   "username": "RouteTesting",
    //   "tagline": "wowimcool",
    //   "firstName": "michael",
    //   "lastName": "comes",
    //   "location": "SF",
    //   "image": "td",
    //   "field": "engineering",
    //   "company": "HR",
    //   "updatedAt": "2017-01-31T23:33:15.000Z",
    //   "createdAt": "2017-01-31T23:33:15.000Z"
    // }

    var user = req.body;
    var userImage = req.files.profile;

    // post user to db
    db.addUser(user, function(result) {
      console.log('INSIDE ADD USER');
      console.log('files ===> ');
      console.log(req.files.profile);
      console.log(result.userId);

      // store profile image in server/assets
      var userId = result.userId;
      userImage.mv('server/assets/'+ userId + '.jpg', function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      })
    });
  });

// when URL ending is, e.g.: /api/users/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back info on user 14.
  	res.send('To Do: fill in request');
  });

module.exports = router;