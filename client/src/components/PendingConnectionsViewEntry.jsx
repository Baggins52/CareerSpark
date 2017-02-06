import React from 'react';

export default class PendingConnectionsViewEntry extends React.Component {
  constructor(props) {
  	super(props);

    this.state = {
      rejectedUsers: [],
      acceptedUsers: [],
      //predicated on the theory that each viewEntry (user) has its own unique `this`
      display: 'block' //toggles to `none`
    }
  }

  handleReject() {
    // console.log('handleReject `this`',this)
    // console.log('this.state.acceptedUsers:',this.state.acceptedUsers)
    //hide the 2 table rows associated with the user
    this.setState({'display': 'none'});
    this.state.rejectedUsers.push(this.props.user);
    console.log('rejectedUsers: ',this.state.rejectedUsers);
  }

  handleAccept() {
    // console.log('handleAccept `this`:',this)
    // console.log('this.state.rejectedUsers:',this.state.rejectedUsers)
    //hide the 2 table rows associated with the user
    this.setState({'display': 'none'});
    this.state.acceptedUsers.push(this.props.user);
    console.log('acceptedUsers: ',this.state.acceptedUsers);
  }

  render() {
  {/*current table setup throws an error if the following isn't saved into a variable before returning*/}
  	var pendingUserEntry = (
    <div style={{display: this.state.display}}>
  	  <tr className="pendingRow">
  	    <td className="lowertooltip">
  	      <div className="pendingUsername">{this.props.user.username}</div>
          <p className="lowertooltiptext">
  	        {this.props.user.firstName} {this.props.user.lastName}<br />
			      {this.props.user.phone}<br />
			      {this.props.user.location}<br />
			      Employer: {this.props.user.company}<br />
			      Field: {this.props.user.field}<br />
			      Tagline: {this.props.user.tagline}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#">
            <img 
              className="pendingReject"
              onClick={this.handleReject.bind(this)}
              src="./images/red-x.png"
              alt={this.props.user.firstName + ' ' + this.props.user.lastName}
            />
          </a>
          <img 
            className="pendingPhoto"
            src={this.props.user.profileImageUrl}
            alt={this.props.user.firstName + ' ' + this.props.user.lastName}
          />
          <a href="#">
            <img 
              className="pendingApprove"
              onClick={this.handleAccept.bind(this)}
              src="./images/green-check.png"
              alt={this.props.user.firstName + ' ' + this.props.user.lastName}
            />
          </a>
        </td>
  	  </tr>
    </div>
  	)

    return pendingUserEntry;
  }
}