import React, { Component } from 'react';
import Group from './group';

class Groups extends Component {
  render(){

    const { groups, deleteGroup } = this.props;
    const groupList = groups.map(group => {
      return(
        <Group group={group} deleteGroup={deleteGroup}/>
      )
    })

    return(
      <ul>
        {groupList}
      </ul>
    )
  }
}

export default Groups;
