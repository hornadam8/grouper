import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import { fetchPosts } from '../actions/fetchPosts.js';
import CommentForm from '../forms/commentForm.js';
import CommentsContainer from '../containers/commentsCoontainer.js';

class PostShowPage extends Component {


  render(){
    let post = this.props.posts.find(e => e.id == this.props.match.params.id);
    debugger;
    return(
      <div className="PostShowPage">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post ? <CommentForm postId={post.id}/> : null}
        {post ? <CommentsContainer postId={post.id}/> : null}
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
