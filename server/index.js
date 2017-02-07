var express = require('express');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var userRouter = require('./routers/users.js');
var connectionRouter = require('./routers/connections.js');
var app = express();

app.use(fileUpload());
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/api/users', userRouter);
app.use('/api/connections', connectionRouter);

app.listen(3000, function() {
  console.log('listening on port 3000');
});


  // GET http://localhost:3000/api/users  ==> returns all users
  // GET http://localhost:3000/api/users/1  ==> returns user/connections data for user 1. Data shaped like state in client/src/app.jsx.
  // POST http://localhost:3000/api/users  ==> posts new user. Data should match Users table in db/index.js
  // GET http://localhost:3000/api/connections  ==> returns all connections (both pending and not pending)
  // POST http://localhost:3000/api/connections  ==> add or accept connection. Data should include sourceUserId and targetUserId.