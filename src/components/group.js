import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Group extends Component {

  handleClick = () => {
    let id = this.props.group.id
    this.props.deleteGroup(id)


    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(id)
    };
    fetch(`http://localhost:3000/groups/${id}`,configObj)
  }

  render() {
    let { group } = this.props;
    return (
      <div className='Group' style={{backgroundColor: 'grey', borderRadius: '25px'}}>
        <li>
          Name: {group.name}
          <br/>
          Description: {group.description}
          <br/>
            <Link to={`/groups/${group.id}`}>Show Page </Link>
          <br/>
          <button onClick={this.handleClick}> Delete </button>
        </li>
      </div>
    );
  }
};

export default Group;
