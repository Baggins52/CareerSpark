import React from 'react';
import mockData from '../mockData.js';
import ConnectionsViewEntry from './ConnectionsViewEntry.jsx';

export default class ConnectionsView extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  render() {
  	var contactList = mockData.acceptedConnections.map((user, idx) => (
	    <ConnectionsViewEntry user={user} key={idx} />
	  ))

  	return (
  	  <div>
        <table id="connectionsView">
          <tr>
        	  <th>Connections</th>
          </tr>
          {contactList}
        </table>
  	  </div>
  	)
  }
}