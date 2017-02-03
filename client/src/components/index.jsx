import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import App from './App.jsx';
import About from './About.jsx';
// import Login from './Login.jsx';
import NewUser from './NewUser.jsx';
import Profile from './Profile.jsx';
import SignUp from './Signup.jsx';

render(
  <SignUp />
, document.getElementById('app'));

/********

DEV NOTE: Until ReactRouter is complete, work on SignUp by swapping commented out code for what's below

********/


<<<<<<< f4f85eabe7c0114a35a04cd99c6396c3ff8f8ea5
// render(
// (
//   <Router history={browserHistory}>
//     <Route path="/" component={App} />
//     <Route path="/about" component={About} />
//     <Route path="/newuser" component={NewUser} />
//     <Route path="/profile" component={Profile} />
//     <Route path="/signup" component={SignUp} />
//   </Router>)
// , document.getElementById('app'));
=======
render(
(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={SignUp} />
  </Router>)
, document.getElementById('app'));
>>>>>>> (client) Deleted unused component (router.jsx) and updated es5 syntax to
