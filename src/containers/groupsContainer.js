import React, { Component } from 'react'
import GroupForm from '../components/groupForm'
import Groups from '../components/groups'
import Group from '../components/group';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import GroupShowPage from '../components/groupShowPage.js';
import {
  Route,
  Link
} from 'react-router-dom';




class GroupsContainer extends Component {

  componentDidMount(){
    this.props.fetchGroups()
  }

  render(){
    const { groups, deleteGroup } = this.props;
    let groupList = groups.map(group => {
      return(
        <Group key={group.id} group={group} deleteGroup={deleteGroup}/>
      )
    })
    console.log(this.props);
    return(
      <div className='GroupsContainer'>
      <GroupForm addGroup={this.props.addGroup} />
      <ul>
        {groupList}
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups.groups,
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(GroupsContainer);
