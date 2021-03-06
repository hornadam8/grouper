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
import { fetchComments } from './actions/fetchComments.js';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import './App.css';



class App extends Component {

  componentDidMount(){
    this.props.fetchGroups()
  }
  render(){
    return(
        <div className='App' style={{backgroundColor: 'black', color: 'white'}}>
        <Navbar className='lightNav' expand="lg">
          <Nav className="mr-auto">
              <Button variant="outline-success"><Nav.Link href="/groups">Home</Nav.Link></Button>
          </Nav>
        </Navbar>
        <h1>Welcome to Grouper!</h1>
        <br/>
        <Switch>
          <Route path="/groups/:id/posts/:id" render={(props) => <PostShowPage {...props}/>}/>
          <Route path="/groups/:id" render={(props) => <GroupShowPage {...props} />}/>
          <Route exact path='/groups' render={(props)=><GroupsContainer {...props}/>}/>
        </Switch>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups.groups,
    posts: state.posts.posts,
    comments: state.comments.comments
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchComments: (groupId,postId) => dispatch(fetchComments(groupId,postId)),
    addComment: formData => dispatch({type: 'ADD_COMMENT', formData}),
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_POST', id}),
    fetchPosts: groupId => dispatch(fetchPosts(groupId)),
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
