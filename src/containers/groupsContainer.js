import React, { Component } from 'react'
import GroupForm from '../components/groupForm'
import Groups from '../components/groups'
import { connect } from 'react-redux'

class GroupsContainer extends Component {
  render(){
    return(
      <div className='GroupsContainer'>
      <GroupForm addGroup={this.props.addGroup} />
      <Groups groups={this.props.groups} deleteGroup={this.props.deleteGroup} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
  deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
})


export default connect(mapStateToProps,mapDispatchToProps)(GroupsContainer);
