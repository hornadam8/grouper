import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchGroups } from '../actions/fetchGroups.js';
import PostsContainer from '../containers/postsContainer.js';
import { fetchPosts } from '../actions/fetchPosts.js';
import PostForm from '../components/postForm.js';

class GroupShowPage extends Component {
  //componentDidMount(){
    //fetchGroups()
    //console.log('Group show page')
  //}
  render(){
    let groups = this.props.groups;
    let group = groups.find(e => e.id == this.props.match.params.id);

    return(
      <div className="GroupShowPage">
        <h1>Show Page</h1>
        <h1>{group ? group.name : null}</h1>
        <p>{group ? group.description : null}</p>
        {group ? <PostForm groupId={group.id}/> : null}
        {group ? <PostsContainer posts={group.posts} addPost={this.props.addPost} deletePost={this.props.deletePost} groupId={group.id}/> : null}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchPosts: () => dispatch(fetchPosts()),
    addPost: formData => dispatch({type: 'ADD_POST', formData}),
    deletePost: id => dispatch({type: 'DELETE_GROUP',id}),
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(GroupShowPage);
