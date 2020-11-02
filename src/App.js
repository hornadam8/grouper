import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupsContainer from './containers/groupsContainer.js';
import GroupShowPage from './components/groupShowPage.js';
import PostShowPage from './components/postShowPage.js';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { fetchGroups } from './actions/fetchGroups.js';
import { fetchPosts } from './actions/fetchPosts.js';



class App extends Component {

  componentDidMount(){
    this.props.fetchGroups()
    console.log('app.js')
  }
  render(){
    return(

        <div className='App'>
        <h1>Welcome to Grouper!</h1>
        <br/>
        <Switch>
          <Route exact path='/groups' render={(props)=><GroupsContainer {...props}/>}/>
          <Route path="/groups/:id/posts/:id" render={(props) => <PostShowPage {...props}/>}/>
          <Route path="/groups/:id" render={(props) => <GroupShowPage {...props} />}/>

        </Switch>
    </div>
    );
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
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_POST', id}),
    fetchPosts: groupId => dispatch(fetchPosts(groupId)),
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
