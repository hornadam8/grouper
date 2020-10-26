import React, { Component } from 'react';

class Group extends Component {

  handleClick = () => {
    debugger;
    this.props.deleteGroup(this.props.group.id)
  }

  render() {
    const { group } = this.props;

    return (
      <div>
        <li>
          Name: {group.name}
          <br/>
          Description: {group.description}
          <br/>
          <button onClick={this.handleClick}> Delete </button>
        </li>
      </div>
    );
  }
};

export default Group;
