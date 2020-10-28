import React, { Component } from 'react'
import GroupForm from '../components/groupForm'
import Groups from '../components/groups'
import { connect } from 'react-redux'
import { fetchGroups } from '../actions/fetchGroups'
import GroupShowPage from '../components/groupShowPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class GroupsContainer extends Component {

  componentDidMount(){
    this.props.fetchGroups()
  }

  render(){
    let groups = this.props.groups;
    console.log(this.props);
    return(
      <div className='GroupsContainer'>
      <GroupForm addGroup={this.props.addGroup} />
      <Groups groups={groups} deleteGroup={this.props.deleteGroup} />
      <Router>
        <Switch>
          <Route path="/groups/:id" component={()=><GroupShowPage groups={this.props.groups} />} />
        </Switch>
      </Router>,
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups
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
