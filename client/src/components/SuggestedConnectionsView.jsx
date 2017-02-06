import React from 'react';
import Header from './Header.jsx'
// import SuggestedConnectionsViewEntry from './SuggestedConnectionsViewEntry.jsx'

export default class SuggestedConnectionsView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentList: this.props.users,
      current: this.props.users[0]
      // post data-persisting state object variables
      //   current: this.props.user.pendingConnectionsIncoming[0],
      //   currentList: this.props.user.pendingConnectionsIncoming}
      //   user: {} ,
      //   pendingConnectionsIncoming: [],
      //   pendingConnectionsOutgoing: [],
      //   acceptedConnections: [],
      //   suggestedConnections: [],
    }
  }

  handleReject() {
    this.setState({'currentList': this.state.currentList.slice(1)});
    this.setState({current: this.state.currentList[0]});
  }

  // clickYes() {
  //   var currUser = this.state.currentList.shift();
  //   this.setState({current: this.state.currentList[0]});

  //   if(this.state.currentList === this.props.user.suggestedConnections) {
  //     //click 'yes' on the suggestedConnection - add to pending outGoing connection
  //     this.props.user.pendingConnectionsOutgoing.push(currUser);
  //   }

  //   //change the current list from pendingConnectionsIncoming to suggested
  //   //suggestedConnections once we accept all pendingConnectionsIncoming
  //   if(this.state.currentList === this.props.user.pendingConnectionsIncoming) {
  //      //accept incoming connections
  //      this.props.user.acceptedConnections.push(currUser);

  //     if(this.props.user.pendingConnectionsIncoming.length === 0) {
  //       this.setState({currentList: this.props.user.suggestedConnections,
  //         current: this.props.user.suggestedConnections[0]});
  //     }
  //   }
  // }

  handleAccept() {
    this.setState({'currentList': this.state.currentList.slice(1)});
    this.setState({current: this.state.currentList[0]});
  }

  // clickNo() {
  //   this.state.currentList.shift();
  //   this.setState({current: this.state.currentList[0]});

  //   if(this.props.user.pendingConnectionsIncoming.length === 0) {
  //       this.setState({currentList: this.props.user.suggestedConnections,
  //         current: this.props.user.suggestedConnections[0]
  //         });
  //   }
  // }

  render() {
    return (
      <table id="suggestedConnectionsView">
        <thead>
          <th className="suggestedHeader">{this.state.current.username}</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <img 
                  src="./images/red-x.png"
                  alt="click to reject"
                  className="suggestedReject"
                  onClick={this.handleReject.bind(this)}
                />
              </a>
            </td>
            <td>
              <img
                src={this.state.current.profileImageUrl}
                className="suggestedImage"
              />
            </td>
            <td>
              <a href="#">
                <img 
                  src="./images/green-check.png"
                  alt="click to approve"
                  className="suggestedApprove"
                  onClick={this.handleAccept.bind(this)}
                />
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="suggestedDescription">
              {this.state.current.firstName} {this.state.current.lastName}<br />
              Employer: {this.state.current.company}<br />
              Field: {this.state.current.field}<br />
              Tagline: {this.state.current.tagline}<br />
              Location: {this.state.current.location}
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

