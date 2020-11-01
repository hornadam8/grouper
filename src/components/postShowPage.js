import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import PostsContainer from '../containers/postsContainer.js';
import { fetchPosts } from '../actions/fetchPosts.js';
import PostForm from '../components/postForm.js';

class PostShowPage extends Component {

  componentDidMount(){
    debugger;
    let groupId = parseInt(this.props.match.params.id,10);
    this.props.fetchPosts(groupId)
  };

  render(){
    debugger;
    return(
      <div className="PostShowPage">
      {this.props}
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
    fetchPosts: groupId => dispatch(fetchPosts(groupId)),
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_POST',id}),
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PostShowPage);
