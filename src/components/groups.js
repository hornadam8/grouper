import React, { Component } from 'react';
import Group from './group';

class Groups extends Component {
  render(){
    const { groups, deleteGroup } = this.props;
    let groupList = groups.map(group => {
      return(
        <Group key={group.id} group={group} deleteGroup={deleteGroup}/>
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
