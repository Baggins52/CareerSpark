import React from 'react';
import {render} from 'react-dom';
import User from './User.jsx';
// import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      currentUser: {},
      userList: []
  	}
  }


  /********

  Below is a sample AJAX request (using jquery) to our server. I haven't written the url route yet,
  but wanted to give general outline of how our client/server will fit together

  *********/

  // getAllUsersByLocation(locationName) {
  //   // I believe we'll need to do this to keep this binding inside our callback
  //   var context = this;
  //   // this callback will take the data returned from the GET request, and setState with it.
  //   var callback = function(err, data) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log('GET request successful');
  //       context.setState({
  //         userList: data,
  //         currentUser: data[0]
  //       })
  //     }
  //   };
  //   // makes request to our server, and sets state through the callback
  //   $.ajax({
  //     url: 'http://localhost:3000/api/location/' + locationName,
  //     method: "GET",
  //     success: callback,
  //     error: callback
  //   })
  // }


  render() {
    return (
  	  <div>
  	    <header>
  	      <div id="header">CareerSpark</div>
          <div id="sub-header">Supercharge Your Professional Network</div>
        </header>

        <img src="./images/red-x.png"
             alt="click to reject" 
             className="user-choice red-x"
        />
        <User />
        <img src="./images/green-check.png" 
             alt="click to approve" 
             className="user-choice green-check"
        />
      </div>
    )
  }
}