import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import PostsContainer from '../containers/postsContainer.js';
import { fetchPosts } from '../actions/fetchPosts.js';
import PostForm from '../forms/postForm.js';

class GroupShowPage extends Component {

  componentDidMount(){
    let groupId = parseInt(this.props.match.params.id,10);
    this.props.fetchPosts(groupId)
  };

  render(){

    let groups = this.props.groups;
    let group = groups.find(e => e.id == this.props.match.params.id);

    return(
      <div className="GroupShowPage">
        <h1>{group ? group.name : null}</h1>
        <p>{group ? group.description : null}</p>
        {group ? <PostForm groupId={group.id} addPost={this.props.addPost} groups={this.props.groups}/> : null}
        <h3>Most recent posts: </h3>
        {group ? <PostsContainer posts={group.posts} addPost={this.props.addPost} deletePost={this.props.deletePost} groupId={group.id}/> : null}
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


export default connect(mapStateToProps,mapDispatchToProps)(GroupShowPage);
