import React, { Component } from 'react';

class GroupShowPage extends Component {
  render(){
    debugger;
    let groups = this.props.groups
    let group = groups.find(e => e.id === this.props.match.params.id);
    return(
      <div className="GroupShowPage">
        <h1>`${group.name}`</h1>
      </div>
    )
  }
}

export default GroupShowPage
