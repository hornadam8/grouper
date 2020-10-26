import React, { Component } from 'react';

class Group extends Component {

  handleClick = () => {
    this.props.deleteGroup(this.props.group.groupName)
  }

  render() {
    const { group } = this.props;

    return (
      <div>
        <li>
          Name: {group.groupName}
          <br/>
          Description: {group.groupDescription}
          <br/>
          <button onClick={this.handleClick}> Delete </button>
        </li>
      </div>
    );
  }
};

export default Group;
