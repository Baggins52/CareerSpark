import React from 'react';
import dummyData from './dummyConnections.js';
import PendingConnectionsViewEntry from './PendingConnectionsViewEntry.jsx';

export default class PendingConnectionsView extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
  	var contactList = this.props.users.map((user, idx) => (
	    <PendingConnectionsViewEntry user={user} key={idx} />
	  ))

  	return (
  	  <div id="pendingConnectionsViewContainer">
        <table id="pendingConnectionsView">
          <tr>
        	  <th id="pendingConnectionsHeader">Pending Connections</th>
          </tr>
          {contactList}
        </table>
  	  </div>
  	)
  }
}