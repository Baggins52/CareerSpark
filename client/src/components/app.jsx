import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import User from './User.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      user: {},
      pendingConnectionsIncoming: [],
      pendingConnectionsOutgoing: [],
      acceptedConnections: [],
      suggestedConnections: [],
      userList: []
  	}
  }

  getUserInfo(userId) {
    var context = this;
    // this callback will take the data returned from the GET request, and setState with it.
    var callback = function(data) {
      console.log('GET request successful');
      context.setState(data);
    };
    // makes request to our server, and sets state through the callback
    $.ajax({
      url: 'http://localhost:3000/api/users/' + userId,
      method: "GET",
      success: callback,
      error: () => console.error('user not found')
    })
  }

  // Dev Note: right now, we are hardwireing User1 as user to get on mount
  componentDidMount() {
    console.log('hello component')
    this.getUserInfo(1)
  }

  // Dev Note: The "show state" button below can be used for debugging. Should be removed at some point.
  render() {
    return (
  	  <div>
  	    <Header />
        <img src="./images/red-x.png"
             alt="click to reject"
             className="user-choice red-x"
        />
        <User />
        <img src="./images/green-check.png"
             alt="click to approve"
             className="user-choice green-check"
        />
        <button onClick={()=>{console.log(this.state)}}>console log state</button>
      </div>
    )
  }
}