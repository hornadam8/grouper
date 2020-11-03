import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import { fetchPosts } from '../actions/fetchPosts.js';
import { fetchComments } from '../actions/fetchComments.js'
import CommentForm from '../forms/commentForm.js';
import CommentsContainer from '../containers/commentsContainer.js';

class PostShowPage extends Component {

  componentWillMount(){
    let groupId = parseInt(this.props.match.url.split('/')[2],10);
    this.props.fetchPosts(groupId)
  }
  componentDidMount(){
    let groupId = parseInt(this.props.match.url.split('/')[2],10);
    let postId = parseInt(this.props.match.params.id,10);
    fetchComments(groupId,postId)
  }

  render(){
    let posts = this.props.posts
    let post = posts.find(e => e.id == this.props.match.params.id);
    return(
      <div className="PostShowPage">
        <h1>{post ? post.title : null}</h1>
        <p>{post ? post.content : null}</p>
        <br/>
        {post ? <CommentForm posts={this.props.posts} postId={post.id} groupId={parseInt(this.props.match.url.split('/')[2],10)} addComment={this.props.addComment}/> : null}
        <br/>
        <h4>Comments</h4>
        <br/>
        {post ? <CommentsContainer groupId={parseInt(this.props.match.url.split('/')[2],10)} postId={post.id}/> : null}
      </div>
    )
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
    addComment: formData => dispatch({type: 'ADD_COMMENT', formData}),
    fetchPosts: groupId => dispatch(fetchPosts(groupId)),
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_POST',id}),
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PostShowPage);
